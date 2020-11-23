
import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
class Home extends Component{
    render(){
        return(
            <div>
                 <Mui.Container fixed style={{ fontFamily:'Times-new-roman'}}>
                       
                       <Mui.Grid container spacing={1}>
                               <Mui.Grid item xs={10} sm={2}>
                               <Mui.Paper><br/>
                               <a href="/" class="crayons-link crayons-link--block fw-bold">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24" role="img" aria-labelledby="abcpw4nt6wts0xhy5gm8cq3oyw9ec3zu" class="crayons-icon crayons-icon--default"><title id="abcpw4nt6wts0xhy5gm8cq3oyw9ec3zu">Sign In/Up</title>
    <g class="nc-icon-wrapper">
        <path fill="#EF9645" d="M21 22s-6.031 5.274-7.74 6.832c-1.323 1.203.88 3.498 2.135 2.452 3.333-2.785 6.493-4.85 6.493-4.85l.367.526c-1.309.79-4.693 2.858-6.449 4.438-1.324 1.19.767 3.553 2.093 2.365 1.822-1.634 5.995-4.565 5.995-4.565l.368.384c-1.08.679-2.772 1.94-4.985 3.958-1.332 1.215.619 2.485 1.764 1.534 3.116-2.586 3.232-4.383 6.661-5.85C32.935 26.986 21 22 21 22z"></path>
        <path fill="#FFCC4D" d="M33.979 12.836c.881-.438 1.653.144 2.106 1.053.448.911 2.532 5.015 2.953 5.869.425.852.191 2.103-.719 2.553-.911.453-2.234 1.054-3.092 2.512-.465.794-2.396 2.887-7.629 5.129-3.427 1.462-6.165 3.938-7.261 4.8-.886.698-2.673-.637-1.343-1.85 2.214-2.02 3.906-3.281 4.985-3.958l-.368-.386s-4.381 3.056-6.238 4.65c-1.261 1.085-2.938-.953-1.613-2.142 1.757-1.58 4.902-3.954 6.211-4.744l-.366-.529s-3.43 2.231-6.765 5.02c-1.113.93-2.847-1.159-1.525-2.364 1.71-1.555 5.043-4.343 7.093-5.499l-.196-.609s-3.218 1.805-5.996 4.494c-.994.961-2.974-.818-1.525-2.293 3.462-3.522 7.958-5.609 9.154-6.413 1.606-1.08 2.451-1.754 1.606-2.133-1.274-.573-3.396-2.582-4.21-4.21-1.053-2.106.44-3.77 2.105-2.106 1.053 1.053 3.159 3.158 5.263 3.158 2.829 0 3.262 1.053 5.264 1.053 1.054-.002 2.106-1.055 2.106-1.055"></path>
        <path fill="#EF9645" d="M29.048 19.167c-.334.001-1.439-.15-2.684-.725-1.073-.494-1.905-1.39-2.597-2.142.039.161-.065.354-.283.58.681.792 1.723 1.696 2.654 2.146 1.082.525 2.315.79 2.871.767.572-.024.385-.622.039-.626zm2.167 8.58c-2.264-1.054-4.062-1.934-.974-.66 1.277.525 3.194-2.06 1.315-2.917C27.774 22.444 16 16 16 16s-6.368 7.437-5.58 7.914c.789.474 1.118 3.849 5.665 6.818 4.298 2.808 6.975 4.015 7.981 4.518 2.107 1.053 3.477-1.678 1.833-2.412-2.833-1.266-2.734-1.343 1.418.382 1.537.64 2.829-2.25 1.205-2.981-2.422-1.089-2.64-1.221 1.239.527 1.435.643 3.073-2.264 1.454-3.019z"></path>
        <path fill="#FFDC5D" d="M11.09 13.278a1.808 1.808 0 00-2.485.615c-.525.871-2.828 4.683-3.319 5.5-.492.816-.364 2.079.506 2.604.87.526 2.447 1.477 3.236 1.952.789.477 4.011 4.477 8.662 7.279 4.648 2.808 6.366 3.286 7.412 3.697 1.05.41 2.437-1.683.793-2.416-2.837-1.268-4.836-2.438-5.859-3.205l.318-.585s2.837 2.12 6.987 3.848c1.537.64 2.79-1.754 1.167-2.487-2.423-1.089-5.412-2.894-6.651-3.79l.346-.571s3.946 2.494 7.825 4.242c1.431.645 2.632-1.786 1.013-2.542-2.26-1.054-5.448-2.955-7.394-4.277l.338-.5s3.615 2.551 6.705 3.823c1.277.528 2.78-1.861.899-2.721C27.81 22.019 23.525 19 22.401 18.1c-.918-.737-1.181-2.413 1.052-3.158 3.158-1.053 4.211-3.158 4.211-4.211 0-1.489-1.376-2.146-2.104-1.053-2.107 3.158-3.166 2.082-5.263 3.158-2.514 1.291-5.466 2.662-7.179 1.628-.733-.441-2.028-1.186-2.028-1.186"></path>
        <path fill="#FFCC4D" d="M22.948 15.721l5.426-2.712a8.282 8.282 0 00-1.763-.172c-2.104 0-4.21-2.105-5.263-3.158-1.665-1.664-3.158 0-2.105 2.106.715 1.428 2.433 3.148 3.705 3.936z"></path>
    </g>
</svg>
<font color="black">
      Sign In/Up
      </font>
    </a><br/>
    <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#FFD983" d="M36 4H14a4 4 0 00-4 4v24H8a4 4 0 000 8h24a4
4 0 004-4V12a4 4 0 000-8z"/>
        <path fill="#E39F3D" d="M12 14h24v-2H14l-2-1z"/>
        <path fill="#FFE8B6" d="M14 4a4 4 0 00-4 4v24.555A3.955 3.955 0 008 32a4 4 0 104 4V11.445c.59.344 1.268.555 2 .555a4 4 0 000-8z"/>
        <path fill="#C1694F" d="M16 8a2 2 0 11-4.001-.001A2 2 0 0116 8m-6 28a2 2 0 11-4.001-.001A2 2 0 0110 36m24-17a1 1 0 01-1 1H15a1 1 0 010-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1"/>
    </g>
</svg>

    </span>
    <font color="black">
    Listings
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#292F33" d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"/>
        <path fill="#66757F" d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"/>
        <path fill="#99AAB5" d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"/>
        <g fill="#292F33" transform="translate(4 4)">
            <circle cx="15.5" cy="2.5" r="1.5"/>
            <circle cx="20.5" cy="2.5" r="1.5"/>
            <circle cx="17.5" cy="6.5" r="1.5"/>
            <circle cx="22.5" cy="6.5" r="1.5"/>
            <circle cx="12.5" cy="6.5" r="1.5"/>
            <circle cx="15.5" cy="10.5" r="1.5"/>
            <circle cx="10.5" cy="10.5" r="1.5"/>
            <circle cx="20.5" cy="10.5" r="1.5"/>
            <circle cx="25.5" cy="10.5" r="1.5"/>
            <circle cx="17.5" cy="14.5" r="1.5"/>
            <circle cx="22.5" cy="14.5" r="1.5"/>
            <circle cx="12.5" cy="14.5" r="1.5"/>
        </g>
        <path fill="#66757F" d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"/>
        <path fill="#66757F" d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"/>
    </g>
</svg>

    </span>
    <font color="black">
    Podcasts
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g transform="translate(4 4)">
        <path fill="#31373D" d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"/>
        <circle fill="#8899A6" cx="24" cy="19" r="2"/>
        <circle fill="#8899A6" cx="9" cy="19" r="2"/>
        <path fill="#8899A6" d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"/>
    </g>
</svg>

    </span>
    <font color="black">
    Videos
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
<path fill="#FFD983" d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"/>
        <path fill="#D99E82" d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"/>
        <path fill="#C1694F" d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"/>
    </g>
</svg>

    </span>
    <font color="black">
    Tags
    </font>
  </a><br/><br/>
  <a href="/" class="crayons-link crayons-link--secondary crayons-link--block crayons-link--block--indented fs-s" id="main-nav-more-trigger">More...</a>
<br/>
      <div class="hidden" id="main-nav-more">
            <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#FFDB5E" d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"/>
        <path fill="#EE9547" d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"/>
    </g>
</svg>

    </span>
    <font color="black">
    Code of Conduct
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#FFD983" d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"/>
        <path fill="#CCD6DD" d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"/>
        <path fill="#FFCC4D" d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"/>
        <path fill="#99AAB5" d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"/>
        <path fill="#CCD6DD" d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"/>
    </g>
</svg>

    </span>
    <font color="black">
    FAQ
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#F4900C" d="M15 4a8 8 0 00-8 8v8h
2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"/>
        <path fill="#DD2E44" d="M5 12l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H5z"/>
        <path fill="#FFCC4D" d="M29 9a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"/>
        <path fill="#744EAA" d="M19 17l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H19z"/>
    </g>
</svg>

    </span>
    <font color="black">
    DEV Shop
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <path fill="#DD2E44" d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"/>
</svg>

    </span>
    <font color="black">
    Sponsors
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg viewBox="0 0 235 234" xmlns="http://www.w3.org/2000/svg" class="rainbow-logo" preserveAspectRatio="xMinYMin meet" width="18">
    <g fill="none" fill-rule="evenodd">
        <path fill="#88AEDC" d="M234.04 175.67l-75.69 58.28h47.18L234.04 212z"/>
        <path d="M234.04 140.06l-121.93 93.89h.02l121.91-93.87zM133.25.95L.04 103.51v.02L133.27.95z"/>
        <path fill="#F58F8E" fill-rule="nonzero" d="M.04.95v30.16L39.21.95z"/>
        <path fill="#FEE18A" fill-rule="nonzero" d="M39.21.95L.04 31.11v35.9L85.84.95z"/>
        <path fill="#F3F095" fill-rule="nonzero" d="M85.84.95L.04 67.01v36.5L133.25.95z"/>
        <path fill="#55C1AE" fill-rule="nonzero" d="M133.27.95L.04 103.53v35.59L179.49.95z"/>
        <path fill="#F7B3CE" fill-rule="nonzero" d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"/>
        <path fill="#88AEDC" fill-rule="nonzero" d="M179.49.95L.04 139.12v36.33L226.67.95z"/>
        <path fill="#F58F8E" fill-rule="nonzero" d="M234.04 31.2L.04 211.38v22.57h18.03l215.97-166.3z"/>
        <path fill="#FEE18A" fill-rule="nonzero" d="M234.04 67.65L18.07 233.95H64.7l169.34-130.39z"/>
        <path fill="#F3F095" fill-rule="nonzero" d="M234.04 103.56L64.7 233.95h47.41l121.93-93.89z"/>
        <path fill="#55C1AE" fill-rule="nonzero" d="M234.04 140.08l-121.91 93.87h46.22l75.69-58.28z"/>
        <path fill="#F7B3CE" fill-rule="nonzero" d="M234.04 212l-28.51 21.95h28.51z"/>
        <path d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75zM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27z" fill="#FFF"/>
    </g>
</svg>

    </span>
    <font color="black">
    About
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g transform="translate(4 4)">
        <circle fill="#FFCC4D" cx="18" cy="18" r="18"/>
        <path fill="#664500" d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.
094-.628z"/>
        <path fill="#65471B" d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"/>
        <path fill="#FFF" d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"/>
        <path fill="#65471B" d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"/>
        <path fill="#292F33" d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"/>
    </g>
</svg>

    </span>
    <font color="black">
    Privacy Policy
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g transform="translate(4 4)">
        <ellipse fill="#F5F8FA" cx="8.828" cy="18" rx="7.953" ry="13.281"/>
        <path fill="#E1E8ED" d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"/>
        <circle fill="#8899A6" cx="6.594" cy="18" r="4.96"/>
        <circle fill="#292F33" cx="6.594" cy="18" r="3.565"/>
        <circle fill="#F5F8FA" cx="7.911" cy="15.443" r="1.426"/>
        <ellipse fill="#F5F8FA" cx="27.234" cy="18" rx="7.953" ry="13.281"/>
        <path fill="#E1E8ED" d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"/>
        <circle fill="#8899A6" cx="25" cy="18" r="4.96"/>
        <circle fill="#292F33" cx="25" cy="18" r="3.565"/>
        <circle fill="#F5F8FA" cx="26.317" cy="15.443" r="1.426"/>
    </g>
</svg>

    </span>
    <font color="black">
    Terms of use
    </font>
  </a><br/>
  <a href="/" class="sidebar-navigation-link crayons-link crayons-link--block">
    <span class="crayons-icon crayons-icon--default" title="Listings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g class="nc-icon-wrapper">
        <path fill="#FFAC33" d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9
.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"/>
        <path fill="#BE1931" d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"/>
        <path fill="#BE1931" d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"/>
    </g>
</svg>

    </span>
    <font color="black">
    Contact
    </font>
  </a><br/>
  <div class="flex justify-around p-4 mt-4 border-solid border-0 border-t-1 border-base-10">
            <a
    href="/"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3ya0vaw02g3w2dsz9w8494rcvii19dg" class="crayons-icon"><title id="a3ya0vaw02g3w2dsz9w8494rcvii19dg">Twitter</title>
    <path d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z" fill="#65bbf2"></path>
</svg>

  </a>
  <a
    href="/"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ab7v2atf71esdc9myidijmsyhlh26kw5" class="crayons-icon"><title id="ab7v2atf71esdc9myidijmsyhlh26kw5">Facebook</title>
    <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
</svg>

  </a>
  <a
    href="/"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="asw7ta46qa9a30dgo5ognirfp7hstuyt" class="crayons-icon"><title id="asw7ta46qa9a30dgo5ognirfp7hstuyt">Github</title>
    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
</svg>

  </a>
  <a
    href="/"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6zeoo3kswm3f0g9gvodx1upohy4n889" class="crayons-icon"><title id="a6zeoo3kswm3f0g9gvodx1upohy4n889">Instagram</title>
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.12
2.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
</svg>

  </a>
  <a
    href="/"
    target="_blank"
    class="crayons-link crayons-link--secondary mx-2"
    rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="am7vcef68pqj0337wmcrt9bbps0dn0kh" class="crayons-icon"><title id="am7vcef68pqj0337wmcrt9bbps0dn0kh">Twitch</title>
    <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
</svg>

  </a><br/>
<nav class="mb-6" aria-label="Secondary sidebar nav">
<h3 class="crayons-subtitle-3 p-2">Popular Tags</h3>
<a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #javascript
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #webdev
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #beginners
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #react
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #tutorial
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #python
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #programming
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #discuss
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #productivity
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #css
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #codenewbie
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #career
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #devops
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #node
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #android
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #opemsource
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #html
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #java
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #showdev
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #github
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #aws
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #php
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #angular
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #typescript
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #testing
</a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #linux
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #vue
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #help
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #security
          </a><br/><br/>
          <a class="crayons-link crayons-link--block py-2 px-2" href="/">
            #ruby
          </a><br/><br/>
</nav>
                       </div>
                       </div>
                       </Mui.Paper>
                       </Mui.Grid>
                       </Mui.Grid>
                       </Mui.Container>
                       </div>
        )
    }
}

export default Home;