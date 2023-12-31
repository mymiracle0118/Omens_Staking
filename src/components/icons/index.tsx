import React from "react";

interface GlyphProps {
  glyph: string;
  glyphIdOne: string;
  glyphIdTwo: string;
  fill: string;
  count?: string;
  secondaryFill?: string;
}

export const Glyph = ({
  glyph,
  fill,
  // count,
  // secondaryFill,
  glyphIdOne,
  glyphIdTwo,
}: GlyphProps) => {
  switch (glyph) {
    default:
    case "twitter":
      return (
        <g>
          <path
            fill={fill ? fill : "currentColor"}
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          />
        </g>
      );
    case "opensea":
      return (
        <g>
          <path
            d="M1.28879 11.1347L1.36459 11.0156L5.93626 3.86379C6.00308 3.75905 6.16015 3.76991 6.21073 3.88363C6.97445 5.59533 7.63351 7.72407 7.32476 9.04934C7.19295 9.5946 6.83183 10.3331 6.42556 11.0156C6.37323 11.1149 6.31543 11.2124 6.25404 11.3063C6.22518 11.3496 6.1764 11.3749 6.12403 11.3749H1.42239C1.29597 11.3749 1.22197 11.2377 1.28879 11.1347Z"
            fill={fill ? fill : "currentColor"}
          />
          <path
            d="M21.6667 12.4638V13.5958C21.6667 13.6608 21.6269 13.7186 21.5691 13.7439C21.2153 13.8956 20.0037 14.4517 19.5 15.1522C18.2144 16.9415 17.2322 19.5 15.0367 19.5H5.87706C2.63069 19.5 0 16.8603 0 13.6031V13.4983C0 13.4117 0.070413 13.3412 0.157072 13.3412H5.26319C5.3643 13.3412 5.43834 13.4351 5.42932 13.5344C5.3932 13.8667 5.45459 14.2061 5.61166 14.5149C5.91498 15.1305 6.54335 15.5151 7.22221 15.5151H9.75V13.5417H7.25111C7.1229 13.5417 7.04709 13.3936 7.1211 13.2889C7.1482 13.2474 7.1789 13.204 7.21139 13.1553C7.4479 12.8195 7.78555 12.2976 8.12137 11.7036C8.35069 11.3028 8.57278 10.8748 8.75153 10.4451C8.78765 10.3675 8.81651 10.2881 8.84541 10.2104C8.89415 10.0732 8.94472 9.94499 8.98081 9.81682C9.01693 9.70849 9.04583 9.59473 9.07473 9.48819C9.1596 9.12347 9.19568 8.73708 9.19568 8.33624C9.19568 8.17917 9.18846 8.01487 9.17401 7.85776C9.16682 7.68624 9.14514 7.51472 9.12347 7.3432C9.10902 7.19151 9.08196 7.04167 9.05306 6.88459C9.01693 6.65527 8.9664 6.42779 8.9086 6.19847L8.88876 6.11181C8.84541 5.95474 8.80929 5.80485 8.75875 5.64778C8.61609 5.15485 8.4518 4.67458 8.27848 4.225C8.21529 4.04625 8.14304 3.87473 8.07083 3.70321C7.9643 3.44499 7.85596 3.21028 7.75665 2.98819C7.70612 2.88708 7.66277 2.79499 7.61946 2.70111C7.57068 2.59457 7.52014 2.48807 7.46957 2.38693C7.43349 2.30929 7.39193 2.23708 7.36303 2.16487L7.05432 1.5943C7.01097 1.51667 7.08318 1.42458 7.16804 1.44805L9.1 1.97167H9.10543C9.10902 1.97167 9.11082 1.97347 9.11265 1.97347L9.3672 2.04388L9.64709 2.12332L9.75 2.15222V1.0039C9.75 0.44958 10.1941 0 10.743 0C11.0175 0 11.2667 0.111926 11.4454 0.294304C11.6242 0.476682 11.7361 0.725841 11.7361 1.0039V2.70833L11.9419 2.76609C11.9582 2.77152 11.9744 2.77875 11.9889 2.78956C12.0394 2.82748 12.1117 2.88349 12.2037 2.95206C12.276 3.00986 12.3536 3.08028 12.4475 3.15248C12.6335 3.30237 12.8555 3.49557 13.0993 3.71762C13.1643 3.77362 13.2275 3.83138 13.2853 3.88918C13.5994 4.18165 13.9515 4.52473 14.2873 4.9039C14.3812 5.0104 14.4733 5.11873 14.5672 5.23249C14.6611 5.34805 14.7604 5.46181 14.8471 5.57557C14.9608 5.72722 15.0836 5.88429 15.1901 6.04862C15.2407 6.12626 15.2985 6.2057 15.3472 6.28333C15.4844 6.49098 15.6054 6.70585 15.721 6.92068C15.7697 7.01999 15.8203 7.12833 15.8636 7.23486C15.9918 7.52194 16.0929 7.81445 16.1579 8.10696C16.1778 8.17015 16.1922 8.23876 16.1994 8.30015V8.31456C16.2211 8.40126 16.2283 8.49335 16.2355 8.58723C16.2644 8.88693 16.25 9.18666 16.185 9.48819C16.1579 9.6164 16.1218 9.73735 16.0785 9.86556C16.0351 9.98834 15.9918 10.1165 15.9358 10.2375C15.8275 10.4885 15.6993 10.7395 15.5476 10.9742C15.4989 11.0608 15.4411 11.1529 15.3833 11.2396C15.3201 11.3317 15.2551 11.4183 15.1974 11.5032C15.1179 11.6115 15.0331 11.7253 14.9464 11.8264C14.8687 11.9329 14.7893 12.0395 14.7026 12.1333C14.5816 12.276 14.4661 12.4114 14.3451 12.5414C14.2729 12.6263 14.1953 12.7129 14.1158 12.7906C14.0382 12.8772 13.9588 12.9549 13.8865 13.0271C13.7656 13.1481 13.6644 13.2419 13.5796 13.3196L13.381 13.5019C13.3521 13.5272 13.3141 13.5417 13.2744 13.5417H11.7361V15.5151H13.6717C14.105 15.5151 14.5167 15.3617 14.8489 15.08C14.9626 14.9807 15.4592 14.551 16.046 13.9028C16.0658 13.8811 16.0911 13.8649 16.12 13.8576L21.4662 12.3121C21.5656 12.2832 21.6667 12.359 21.6667 12.4638Z"
            fill={fill ? fill : "currentColor"}
          />
        </g>
      );
    case "discord":
      return (
        <g>
          <path
            fill={fill ? fill : "currentColor"}
            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
          />
        </g>
      );
    case "instagram":
      return (
        <path
          fill={fill ? fill : "currentColor"}
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        />
      );
    case "wallet":
      return (
        <path
          fill={fill ? fill : "currentColor"}
          d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
        />
      );
    case "user":
      return (
        <path
          fill={fill ? fill : "currentColor"}
          d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
        />
      );
    case "bars":
      return (
        <path
          fill={fill ? fill : "currentColor"}
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        />
      );
    case "logo":
      return (
        <>
          <g filter="url(#prefix__filter0_d_1_2)">
            <path
              d="M59.568 109.123c-4.787 0-8.451-1.359-10.992-4.078-2.542-2.719-3.812-6.56-3.812-11.525V60.897c0-4.965 1.27-8.806 3.812-11.525 2.54-2.719 6.205-4.078 10.992-4.078 4.788 0 8.452 1.36 10.993 4.078 2.541 2.719 3.812 6.56 3.812 11.525V93.52c0 4.965-1.27 8.806-3.812 11.525-2.541 2.719-6.206 4.078-10.993 4.078zm0-8.865c3.37 0 5.053-2.04 5.053-6.117V60.276c0-4.078-1.684-6.117-5.053-6.117-3.368 0-5.053 2.04-5.053 6.117v33.865c0 4.078 1.685 6.117 5.053 6.117zm16.967-54.077h13.919l6.205 44.414h.177l6.206-44.414h13.918v62.055h-9.219V61.251h-.178l-7.092 46.985h-8.156l-7.092-46.985h-.177v46.985h-8.51V46.18zm43.27 0H146.4v8.865h-16.844v16.4h13.387v8.865h-13.387v19.06H146.4v8.865h-26.595V46.18zm27.773 0h12.233l9.486 37.144h.177V46.18h8.688v62.056h-10.017l-11.702-45.3h-.178v45.3h-8.687V46.18zm46.077 62.942c-4.728 0-8.304-1.33-10.727-3.989-2.423-2.719-3.635-6.59-3.635-11.614v-3.546h9.22v4.255c0 4.02 1.684 6.029 5.053 6.029 1.655 0 2.896-.473 3.723-1.419.887-1.004 1.33-2.6 1.33-4.787 0-2.6-.591-4.876-1.773-6.826-1.182-2.01-3.369-4.403-6.56-7.18-4.019-3.547-6.826-6.738-8.422-9.575-1.596-2.896-2.394-6.147-2.394-9.752 0-4.905 1.242-8.688 3.724-11.347 2.482-2.719 6.087-4.078 10.815-4.078 4.669 0 8.186 1.36 10.55 4.078 2.423 2.66 3.634 6.501 3.634 11.525v2.57h-9.219v-3.191c0-2.128-.414-3.664-1.241-4.61-.828-1.005-2.039-1.507-3.635-1.507-3.251 0-4.876 1.98-4.876 5.94 0 2.245.591 4.344 1.773 6.294 1.241 1.95 3.458 4.314 6.649 7.092 4.078 3.546 6.885 6.767 8.422 9.663 1.536 2.896 2.305 6.294 2.305 10.195 0 5.083-1.271 8.983-3.812 11.702-2.482 2.719-6.117 4.078-10.904 4.078z"
              fill={fill ? fill : "currentColor"}
            />
          </g>
          <g filter="url(#prefix__filter1_d_1_2)">
            <path
              fill={fill ? fill : "currentColor"}
              d="M53.666 109.5h147.466v5.91H53.666z"
            />
          </g>
          <g filter="url(#prefix__filter2_d_1_2)">
            <path
              d="M95.248 117.125c-4.728 0-8.333 1.329-10.815 3.989-2.482 2.719-3.724 6.59-3.724 11.613v1.153h9.22v-1.773c0-4.078 1.685-6.117 5.053-6.117 1.832 0 3.192.561 4.078 1.684.887 1.123 1.33 3.103 1.33 5.94v11.879h-.177c-1.714-3.605-4.67-5.408-8.865-5.408-3.546 0-6.236 1.212-8.068 3.635-1.832 2.423-2.748 5.94-2.748 10.55v11.081c0 4.964 1.27 8.806 3.812 11.525 2.541 2.718 6.206 4.078 10.993 4.078s8.451-1.36 10.993-4.078c2.541-2.719 3.812-6.561 3.812-11.525v-32.092c0-10.756-4.965-16.134-14.894-16.134zm.089 31.825c3.369 0 5.053 2.039 5.053 6.117v10.993c0 4.019-1.684 6.028-5.053 6.028-3.369 0-5.053-2.009-5.053-6.028v-10.993c0-4.078 1.684-6.117 5.053-6.117zm30.974-31.825c-4.728 0-8.333 1.329-10.816 3.989-2.482 2.719-3.723 6.59-3.723 11.613v1.153h9.22v-1.773c0-4.078 1.684-6.117 5.053-6.117 1.832 0 3.191.561 4.078 1.684.886 1.123 1.33 3.103 1.33 5.94v11.879h-.178c-1.714-3.605-4.669-5.408-8.865-5.408-3.546 0-6.235 1.212-8.067 3.635-1.832 2.423-2.748 5.94-2.748 10.55v11.081c0 4.964 1.27 8.806 3.812 11.525 2.541 2.718 6.205 4.078 10.993 4.078 4.787 0 8.451-1.36 10.992-4.078 2.542-2.719 3.812-6.561 3.812-11.525v-32.092c0-10.756-4.964-16.134-14.893-16.134zm.089 31.825c3.368 0 5.053 2.039 5.053 6.117v10.993c0 4.019-1.685 6.028-5.053 6.028-3.369 0-5.054-2.009-5.054-6.028v-10.993c0-4.078 1.685-6.117 5.054-6.117zm30.973-31.825c-4.728 0-8.333 1.329-10.815 3.989-2.482 2.719-3.723 6.59-3.723 11.613v1.153h9.219v-1.773c0-4.078 1.685-6.117 5.053-6.117 1.833 0 3.192.561 4.078 1.684.887 1.123 1.33 3.103 1.33 5.94v11.879h-.177c-1.714-3.605-4.669-5.408-8.865-5.408-3.546 0-6.235 1.212-8.068 3.635-1.832 2.423-2.748 5.94-2.748 10.55v11.081c0 4.964 1.271 8.806 3.812 11.525 2.542 2.718 6.206 4.078 10.993 4.078s8.451-1.36 10.993-4.078c2.541-2.719 3.812-6.561 3.812-11.525v-32.092c0-10.756-4.965-16.134-14.894-16.134zm.089 31.825c3.369 0 5.053 2.039 5.053 6.117v10.993c0 4.019-1.684 6.028-5.053 6.028-3.369 0-5.053-2.009-5.053-6.028v-10.993c0-4.078 1.684-6.117 5.053-6.117z"
              fill={fill ? fill : "currentColor"}
            />
          </g>
          <defs>
            <filter
              id="prefix__filter0_d_1_2"
              x={0.438}
              y={0.968}
              width={252.258}
              height={152.48}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation={22.163} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="prefix__filter1_d_1_2"
              x={9.341}
              y={65.174}
              width={236.117}
              height={94.561}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation={22.163} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="prefix__filter2_d_1_2"
              x={36.207}
              y={72.799}
              width={180.386}
              height={152.48}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation={22.163} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
          </defs>
        </>
      );
  }
};

interface Props {
  glyph: string;
  size?: string;
  tipText?: string;
  count?: string;
  onClick?: any;
  isOnboarding?: string;
  dataCy?: string;
  fill?: string;
  secondaryFill?: string;
  height?: number;
  viewBox?: string;
}

const Icon = (props: Props): JSX.Element => {
  const {
    size,
    tipText,
    onClick,
    glyph,
    count,
    viewBox,
    height,
    fill,
    secondaryFill,
  } = props;

  const glyphId = `id-${glyph}`;
  const glyphIdOne = `one-${glyph}`;
  const glyphIdTwo = `two-${glyph}`;
  const getViewBox = (glyph: string) => {
    const viewBox: any = {
      twitter: "0 0 512 512",
      opensea: "0 0 22 20",
      discord: "0 0 640 512",
      instagram: "0 0 448 512",
      wallet: "0 0 512 512",
      user: "0 0 448 512",
      bars: "0 0 448 512",
      logo: "0 0 253 226",
    };
    return viewBox[glyph] ? viewBox[glyph] : "0 0 32 32";
  };
  return (
    <>
      <style jsx={true}>{`
        .svg-wrapper {
          display: inline-block;
          flex: 0 0 ${props.size ? `${props.size}px` : "32px"};
          width: ${props.size ? `${props.size}px` : "32px"};
          height: ${props.height
            ? `${props.height}px`
            : props.size
            ? `${props.size}px`
            : "32px"};
          min-width: ${props.size ? `${props.size}px` : "32px"};
          min-height: ${props.height
            ? `${props.height}px`
            : props.size
            ? `${props.size}px`
            : "32px"};
          color: inherit;
        }
        .inline-svg {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          color: inherit;
          fill: currentColor;
        }
      `}</style>
      <div
        className={"svg-wrapper icon relative"}
        // tipText={tipText}
        onClick={onClick}
      >
        <svg
          className={"inline-svg absolute h-full w-full"}
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox ? viewBox : getViewBox(glyph)}
          preserveAspectRatio="xMidYMid meet"
          id={glyphId}
        >
          <Glyph
            count={count}
            glyph={glyph}
            glyphIdOne={glyphIdOne}
            glyphIdTwo={glyphIdTwo}
            fill={fill ? fill : ""}
            secondaryFill={secondaryFill ? secondaryFill : ""}
          />
        </svg>
      </div>
    </>
  );
};

export default Icon;
