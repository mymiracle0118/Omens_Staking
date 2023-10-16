import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { NavBar } from "../components/nav";
import { IMission } from "../components/staking/missions";
import { StakingTable } from "../components/staking/table";
import { withApollo } from "../utils/with-apollo";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { StakingStats } from "../components/staking/stats";
import { ConnectButton } from "../components/connect";
import useWalletNfts from "../hooks/use-wallet-nfts";
import classNames from "classnames";
import { useDigsite } from "../hooks/use-current-digsite";

const StakePage = () => {
  const wallet = useWallet();
  const [isLoading, nfts, getNFTs] = useWalletNfts();
  const [isViewingCurrent, setIsViewingCurrent] = useState<boolean>(true);
  const [isShowingStats, setIsShowingStats] = useState<boolean>(false);
  const [isShowingOwnStats, setIsShowingOwnStats] = useState<boolean>(false);
  const [isShowingAllTime, setIsShowingAllTime] = useState<boolean>(false);
  const { currentDigsite, setCurrentDigsite } = useDigsite();
  const { data, loading } = useSubscription(
    gql`
      subscription getMissionsQuery($where: missions_bool_exp) {
        missions(where: $where) {
          id
          reward
          wallet
          started_at
          extract_at
          mints
          transactions
          status
          type
        }
      }
    `,
    {
      variables: {
        where: {
          wallet: {
            _eq: wallet?.publicKey?.toString() || "0000",
          },
        },
      },
    }
  );

  console.log("missions", data, loading);
  
  useEffect(()=>{
    if(wallet.connected && wallet.publicKey) {
      setCurrentDigsite("staking");
    }
  }, [wallet])

  // console.log("mission", data, loading);

  const statusNWalletVariables = () => {
    const variables: any = [];

    if (isShowingOwnStats && wallet.connected) {
      variables.push({
        wallet: {
          _eq: wallet?.publicKey?.toString(),
        },
      });
    }

    if (!isShowingAllTime) {
      variables.push({
        _or: [{ status: { _eq: "staking" } }, { status: { _eq: "restaking" } }],
      });
    }

    return variables;
  };

  const searchVariables = statusNWalletVariables();
  const {
    data: statsData,
    loading: statsLoading,
    refetch: refetchStats,
  } = useQuery(
    gql`
      query statusQuery(
        $countWhere: missions_bool_exp
        $stakingWhere: missions_bool_exp
      ) {
        countNRewards: missions_aggregate(where: $countWhere) {
          aggregate {
            count
            sum {
              reward
            }
          }
        }
        staking: missions_aggregate(where: $stakingWhere) {
          aggregate {
            count
          }
        }
      }
    `,
    {
      variables: {
        countWhere: {
          _and: searchVariables,
        },
        stakingWhere: {
          _and: [{ type: { _eq: "staking" } }, ...searchVariables],
        }
      },
    }
  );

  // console.log("status result", statsData, statsLoading)

  useEffect(() => {
    const interval = setInterval(() => {
      refetchStats();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const missions = data?.missions;

  return (
    <div
      className={classNames(
        "w-full h-full",
        currentDigsite ? `bg-${currentDigsite}` : "bg-base"
      )}
    >
      {/* Nav Bar */}
      <NavBar />
      {/* Header */}
      <div
        className={"w-full h-screen flex justify-around items-center"}
        style={{
          ...(currentDigsite && { background: `url(/${currentDigsite}.png)` }),
        }}
      >
        <div
          className={
            "w-full absolute overflow-auto z-10 flex flex-col h-full flex-1 pt-16 px-10 lg:px-20"
          }
        >
          {!!currentDigsite && (
            <div className="flex justify-end items-center mb-4">
              <a
                onClick={() => {
                  setIsShowingStats(!isShowingStats);
                  if (!isShowingStats) {
                    setIsShowingOwnStats(false);
                    setIsShowingAllTime(false);
                  }
                }}
                className={`font-viet uppercase tracking-spaced text-${currentDigsite}OffsetAccent cursor-pointer px-4 py-2 mx-2 text-center text-lg border-${currentDigsite}OffsetAccent border-special-sm rounded-lg`}
                style={{ background: "rgba(0, 0, 0, .6)" }}
              >
                <span>{!isShowingStats ? "View Stats" : "Close Stats"}</span>
              </a>
              {wallet.connected && (
                <a
                  onClick={() => {
                    setIsViewingCurrent(!isViewingCurrent);
                  }}
                  className={`font-viet uppercase tracking-spaced text-${currentDigsite}OffsetAccent cursor-pointer px-4 py-2 mx-2 text-center text-lg border-${currentDigsite}OffsetAccent border-special-sm rounded-lg`}
                  style={{ background: "rgba(0, 0, 0, .6)" }}
                >
                  <span>
                    {isViewingCurrent ? "View Previous" : "View Current"}
                  </span>
                </a>
              )}
            </div>
          )}

          {!!currentDigsite && !statsLoading && isShowingStats && (
            <div className="flex flex-col items-center justify-center w-full">
              <StakingStats
                stats={statsData}
                isViewingAllTimeStats={isShowingAllTime}
                setIsViewingAllTimeStats={setIsShowingAllTime}
                isViewingMyStats={isShowingOwnStats}
                setIsViewingMyStats={setIsShowingOwnStats}
              />
            </div>
          )}

          {
            wallet.connected &&
            !loading && (
              <StakingTable
                missions={
                  missions?.filter(
                    (m: IMission) =>
                      m.status ===
                        (isViewingCurrent ? "staking" : "completed") ||
                      m.status ===
                        (isViewingCurrent ? "pending" : "canceled") ||
                      (isViewingCurrent && m.status === "cancel-pending") ||
                      (isViewingCurrent && m.status === "pending-complete") ||
                      (isViewingCurrent && m.status === "restaking")
                  ) || []
                }
                usersActiveMints={missions.flatMap((m) =>
                  m.status === "pending" ||
                  m.status === "staking" ||
                  m.status === "pending-complete" ||
                  m.status === "cancel-pending" ||
                  m.status === "restaking" ||
                  m.status === "cancel-verify"
                    ? m.mints.map((_m) => _m.mint)
                    : []
                )}
              />
            )
          }
          <div
            className={classNames(
              wallet.connected
                ? "absolute z-0 -top-96"
                : "w-full flex-col flex items-center justify-center mt-12"
            )}
          >
            <p
              className={
                "text-3xl font-bebas text-primary tracking-spaced text-center my-4"
              }
            >
              Connect your wallet to stake
            </p>
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo()(StakePage);
