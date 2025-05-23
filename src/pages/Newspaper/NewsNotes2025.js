import { Box, Container, Grid, Paper, Tab, Tabs, Typography, colors, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // If using Axios for HTTP requests




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const tabpanel = [
  { id: 0, img: "/assets/newspaper/april/newnotes1.webp", link: "https://drive.google.com/file/d/1oXuXL6QoP9b8pzh5zDxLCcm51EmFxN5Z/view?usp=sharing" },
  { id: 1, img: "/assets/newspaper/april/newnotes2.webp", link: "https://drive.google.com/file/d/15ra86K7KtS9vCTvWUhoMKtFLJnDGVdvH/view?usp=sharing" },
  { id: 2, img: "/assets/newspaper/april/newnotes3.webp", link: "https://drive.google.com/file/d/1sC5LhQI9bOK9yJ9wq3eRCPCaNiS3a_ju/view?usp=sharing" },
  { id: 3, img: "/assets/newspaper/april/newnotes4.webp", link: "https://drive.google.com/file/d/1dhnYQf2LTxPcCDP2gEBq3Ib2_b86SD5Z/view?usp=sharing" },
  { id: 4, img: "/assets/newspaper/april/newnotes5.webp", link: "https://drive.google.com/file/d/1sjCWIjb5Rij9M3YdkyWXaDOmVnOMu_Bf/view?usp=sharing" },
  { id: 5, img: "/assets/newspaper/april/newnotes6.webp", link: "https://drive.google.com/file/d/1L3c7kmbUtkzy07w0oM_8chG9HBp00dZH/view?usp=sharing" },
  { id: 6, img: "/assets/newspaper/april/newnotes7&8.webp", link: "https://drive.google.com/file/d/12bmcjBwZO4CS8fEmP4X70UqklvymjGRp/view?usp=sharing" },
  { id: 7, img: "/assets/newspaper/april/newnotes9.webp", link: "https://drive.google.com/file/d/1kzNHb0YNAQgLarZec4PjmpJoP6utHTo8/view?usp=sharing" },
  { id: 9, img: "/assets/newspaper/april/newnotes10.webp", link: "https://drive.google.com/file/d/10IawnY4lBnrOsbRHoVQbLZ2e2H6mUwBZ/view?usp=sharing" },
  { id: 10, img: "/assets/newspaper/april/newnotes11.webp", link: "https://drive.google.com/file/d/1XNm7Ja48KaLCiud-HB-YB_QIfxgp8mi4/view" },
  { id: 11, img: "/assets/newspaper/april/newnotes12.webp", link: "https://drive.google.com/file/d/1ENBeQCOQAUAHGR7BiRHKr8F4VrSz1L6r/view" },
  { id: 12, img: "/assets/newspaper/april/newnotes13.webp", link: "https://drive.google.com/file/d/1eCugFdgcYTGaNK20muUmYz1TYJNRWQRp/view?usp=sharing" },
  { id: 13, img: "/assets/newspaper/april/newnotes14&15.webp", link: "https://drive.google.com/file/d/1WH27BuL2pyGpPvTFRYxhwOhIci4uI1Nu/view?usp=sharing" },
  { id: 14, img: "/assets/newspaper/april/newnotes16.webp", link: "https://drive.google.com/file/d/1BKGC2g15MBPW2ZcF5TALcFk3pdgpowHz/view?usp=sharing" },
  { id: 15, img: "/assets/newspaper/april/newnotes17.webp", link: "https://drive.google.com/file/d/1pde3YxdeOP3-S6oUeAe9Bd1U0fbfTkF9/view?usp=sharing" },
  { id: 16, img: "/assets/newspaper/april/newsnotes18.jpg", link: "https://drive.google.com/file/d/1Xw8TdEZJO7K0_8ejhljNv8DzVjuyoOJw/view?usp=sharing" },
  { id: 17, img: "/assets/newspaper/april/newsnotes19.jpg", link: "https://drive.google.com/file/d/12tAjNSwnlFOj5F-G_LBb_ITCgibvGRGZ/view?usp=sharing" },
  { id: 18, img: "/assets/newspaper/april/newsnotes20.jpg", link: "https://drive.google.com/file/d/1GkYy2yGCE0RTMtSeAIBf3zKULwNexDCn/view?usp=sharing" },
  { id: 19, img: "/assets/newspaper/april/newsnotes21&22.jpg", link: "https://drive.google.com/file/d/1CR5h8cKBYjtrsAciOUjZC_5CfrGTRZgY/view" },
  { id: 20, img: "/assets/newspaper/april/newsnotes23.jpg", link: "https://drive.google.com/file/d/1d2ICMwUkTcTeBBaImS90WR3nbVeikFKr/view" },
  { id: 21, img: "/assets/newspaper/april/newnotes24.webp", link: "https://drive.google.com/file/d/1L0p07nJ28DXiveSB8ibWmKfHk97JdowT/view" },
  { id: 22, img: "/assets/newspaper/april/newnotes25.webp", link: "https://drive.google.com/file/d/1UObjZcZ6-nwsW0UT2GgsTXKYncPIwVER/view " },
  { id: 23, img: "/assets/newspaper/april/newnotes26.webp", link: "https://drive.google.com/file/d/15LFZ4ihpHzR5Ji2QMKyGEW6c5K2lOI63/view?usp=sharing " },
  { id: 24, img: "/assets/newspaper/april/newnotes27.webp", link: "https://drive.google.com/file/d/1QdLBmjCVGHzCODtjTChoZO9W8oPv4Oik/view?usp=sharing " },
  { id: 25, img: "/assets/newspaper/april/newnotes28&29.webp", link: "https://drive.google.com/file/d/1ArzVjWb2qCAEwxroSLL9hf5Ui1FUwErb/view?usp=sharing" },
  { id: 26, img: "/assets/newspaper/april/newnotes30.webp", link: "https://drive.google.com/file/d/1ziuYj-sIGC0S1JQ4PNO0-T10B-YgndbX/view" },



];

const maydata = [
  { id: 1, img: '/assets/newspaper/may/newnotesmay1.webp', link: 'https://drive.google.com/file/d/1WwqSvAUXEJ-98woVB_p2em2RjF6gPqBm/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/may/newnotesmay2.webp', link: 'https://drive.google.com/file/d/1-ZVAZ6Epqxz-3fGrmbVoPygfL_Hk4j9d/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/may/newnotesmay3.webp', link: 'https://drive.google.com/file/d/1m-Mn3Ng2hJCla0JmMLddSKjPUktskRO-/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/may/newnotesmay4.webp', link: 'https://drive.google.com/file/d/1FpUB1dY_eY9xUxZp2Z5dwHmuRgwNWFhm/view?usp=sharing ' },
  { id: 5, img: '/assets/newspaper/may/newnotesmay56.webp', link: 'https://drive.google.com/file/d/1qNgoejG9ncamMACHGB3Uo5FQS6FKTvL9/view?usp=sharing ' },
  { id: 6, img: '/assets/newspaper/may/may7.webp', link: 'https://drive.google.com/file/d/1fpLMuEiel7yJ98oBZo_Fqn3priXn-YPR/view?usp=sharing ' },
  { id: 7, img: '/assets/newspaper/may/may8.webp', link: ' https://drive.google.com/file/d/1zl4LBe6zGKf1bkvFlRYdJUL1dvtzWGhy/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/may/may9.webp', link: 'https://drive.google.com/file/d/1Zm3bK27X9QRSUqqYKM75BLsd1niybIB9/view?usp=sharing ' },
  { id: 9, img: '/assets/newspaper/may/may10.webp', link: 'https://drive.google.com/file/d/1XLmVujrEIYW7zNEsO31h3RDfecewvE7s/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/may/may11.webp', link: ' https://drive.google.com/file/d/1g0jfjFXI1Q2zblwfXlBVbOb9NF8w3sMU/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/may/may1213.webp', link: 'https://drive.google.com/file/d/18vVcqO6UJvVOgKdRJAAAV7YeQvo7nT1s/view?usp=sharing ' },
  { id: 12, img: '/assets/newspaper/may/may14.webp', link: ' https://drive.google.com/file/d/1ZRlfm8GO2UDRhzFEirDBakzBkXTYo7ec/view?usp=sharing' },
  { id: 13, img: '/assets/newspaper/may/may15.webp', link: 'https://drive.google.com/file/d/1Rssya2n8svQwZZV6F4tJM61hY3rbzZyf/view?usp=sharing ' },
  { id: 14, img: '/assets/newspaper/may/may16.webp', link: 'https://drive.google.com/file/d/1fGwt_762Zwu2VbA5MY-2tcrRuaJXFX8g/view?usp=sharing  ' },
  { id: 15, img: '/assets/newspaper/may/may17.webp', link: ' https://drive.google.com/file/d/1kigbTDn0J1SKn55SlDlKCa-_QtxczN_Q/view?usp=sharing ' },
  { id: 16, img: '/assets/newspaper/may/may18.webp', link: 'https://drive.google.com/file/d/1RnY02aH2odjSG6J6sr8H-B5QZDmAxQxo/view?usp=sharing  ' },
  { id: 17, img: '/assets/newspaper/may/may1920.webp', link: 'https://drive.google.com/file/d/1SJqxXDBzS8ja-S1-4ZUgUJaZb-Q-QzKU/view?usp=sharing  ' },
  { id: 18, img: '/assets/newspaper/may/may21.webp', link: 'https://drive.google.com/file/d/1yQoqNYGXrqIhFSbKmHiZnS1zEfTpPkdf/view?usp=sharing  ' },
  { id: 20, img: '/assets/newspaper/may/may22.webp', link: 'https://drive.google.com/file/d/1uZwx9T1zFpfHhl4b7wj0txz2-JLmPM98/view?usp=sharing  ' },
  { id: 21, img: '/assets/newspaper/may/may23.webp', link: ' https://drive.google.com/file/d/1vid5SwA9oovcnvcirv_g2_3x68t5SUF9/view?usp=sharing ' },
  { id: 22, img: '/assets/newspaper/may/may24.webp', link: 'https://drive.google.com/file/d/1bSW7YIGiASETeGkVqfSSKidp-Wvd63gS/view?usp=sharing  ' },
  { id: 23, img: '/assets/newspaper/may/may25.webp', link: 'https://drive.google.com/file/d/1-UgOpKwOpi2Wx9Ha6AccQAOq8ltZYdIH/view?usp=sharing  ' },
  { id: 24, img: '/assets/newspaper/may/may2627.webp', link: 'https://drive.google.com/file/d/1mEbH8zaLy_65S4V8yf1xuzZdAbzWVNNx/view?usp=sharing' },
  { id: 25, img: '/assets/newspaper/may/may28.webp', link: 'https://drive.google.com/file/d/1P9CPTscwTJUYwtRfU0SYRmOAf7aAEUUz/view?usp=sharing' },
  { id: 26, img: '/assets/newspaper/may/may29.webp', link: 'https://drive.google.com/file/d/1GmOUCriKE5S7-q4K0CQu_uOjGuRCiCHF/view?usp=sharing' },
  { id: 27, img: '/assets/newspaper/may/may30.webp', link: 'https://drive.google.com/file/d/1NhUhUQc9Vxa3mJy3Im2DCt1wrhWkdsKU/view?usp=sharing' },
  { id: 28, img: '/assets/newspaper/may/may31.webp', link: 'https://drive.google.com/file/d/1HeSy-wFU85gOoB_upQO6OJCxjZgefkoR/view?usp=sharing' }

];

const juneData = [
  { id: 1, img: '/assets/newspaper/june/ncertjuly1.jpg', link: 'https://drive.google.com/file/d/1XWO94_qdjcc_H9-yUg9IfyAM7Lar0-bb/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/june/ncertjuly2.jpg', link: 'https://drive.google.com/file/d/1C8WsX-7dd06Iw6wJTNQ8_t56uAW28pu7/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/june/ncertjuly3.jpg', link: 'https://drive.google.com/file/d/1OnlDxKqlEYJ6d064AZiOeomC2Gv2LrLY/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/june/ncertjuly4.jpg', link: 'https://drive.google.com/file/d/1pwZWId3A9vLsyhpYCdtEfQ9UWbXWPwKQ/view?usp=sharing' },
  { id: 5, img: '/assets/newspaper/june/ncertjuly5.jpg', link: 'https://drive.google.com/file/d/1bRu1eU54qAQhrhdjlAy8JS0EqAElu3rD/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/june/ncertjuly6.jpg', link: 'https://drive.google.com/file/d/1SnFSWZ8AURulkd_ClX_HOnjuZ93ATuV9/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/june/ncertjuly7.jpg', link: 'https://drive.google.com/file/d/1D2x7jx1ZXJ2F_DYjlYzc8bB6Ksw_w4zF/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/june/ncertjuly8.jpg', link: 'https://drive.google.com/file/d/1zZx7m2f5kQmYal3rsuFXT5iquKzMTeXx/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/june/ncertjuly9.jpg', link: 'https://drive.google.com/file/d/1T1WT2ycU6IfIEYL4gG7ofkIDIqK43BYk/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/june/ncertjuly10.jpg', link: 'https://drive.google.com/file/d/1pietDGYO1tfphsbugeyf4c_AZFxLxv_3/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/june/ncertjuly11.jpg', link: 'https://drive.google.com/file/d/1MJ5VMZb-lsMha3gFsQNvNtkhmgzLzGr3/view?usp=sharing' },
  { id: 12, img: '/assets/newspaper/june/ncertjuly12.jpg', link: 'https://drive.google.com/file/d/1f_dwi22Ci1a_gz33g01vaLgdQeGZ4bcd/view?usp=sharing' },
  { id: 13, img: '/assets/newspaper/june/ncertjuly13.jpg', link: 'https://drive.google.com/file/d/1bYy1Yjk5B-ChkbNtWgdQ4ZhrBXe5kgAb/view?usp=sharing' },
  { id: 14, img: '/assets/newspaper/june/ncertjuly14.jpg', link: 'https://drive.google.com/file/d/1bYy1Yjk5B-ChkbNtWgdQ4ZhrBXe5kgAb/view?usp=sharing' },
  { id: 15, img: '/assets/newspaper/june/ncertjuly15.jpg', link: 'https://drive.google.com/file/d/1uVg51b0TH7cC0T55QREhJf8ZaA7CZp8m/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/june/ncertjuly16.jpg', link: 'https://drive.google.com/file/d/12f12065BmIwg3DzvnthwZFCAMDfarG2d/view?usp=sharing' },
  { id: 17, img: '/assets/newspaper/june/ncertjuly17.jpg', link: 'https://drive.google.com/file/d/194h-0zAUvqyTJcKY-iKIddbV70wZ3UvE/view?usp=sharing' },
  { id: 18, img: '/assets/newspaper/june/june21.webp', link: 'https://drive.google.com/file/d/1FVYYqJOCWmpd3w3zE-xVE3zvkd2qMttX/view?usp=sharing' },
  { id: 19, img: '/assets/newspaper/june/june22.webp', link: 'https://drive.google.com/file/d/16PlYq_4gPlocdhr8B1BmGb06qDmwpdc6/view?usp=sharing' },
  { id: 20, img: '/assets/newspaper/june/june23.webp', link: 'https://drive.google.com/file/d/1sf3ARe8Zb6Ed1aoObNOe1o27H3DEJj-3/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/june/june24.webp', link: 'https://drive.google.com/file/d/1VupWtO-jmATHuKspVP1uOsKv_YFYwHlX/view?usp=sharing' },
  { id: 22, img: '/assets/newspaper/june/june25.webp', link: 'https://drive.google.com/file/d/1ok1R6emRHOb6nbtUjgCF-ZojUx9n1k22/view?usp=sharing' },
  { id: 23, img: '/assets/newspaper/june/june26.webp', link: 'https://drive.google.com/file/d/16UZWHm9SK2Z0adF4D8x3o64Sk4G2A2EE/view' },
  { id: 24, img: '/assets/newspaper/june/june27.webp', link: 'https://drive.google.com/file/d/1wbYUle-7IiqZyzU_qRMls3PkPtRS-ZVW/view?usp=sharing' },
  { id: 25, img: '/assets/newspaper/june/june28.webp', link: 'https://drive.google.com/file/d/1Bp1o117_sH87QbtPBoyc3bAMXYwnuGxp/view?usp=sharing' },
  { id: 26, img: '/assets/newspaper/june/june2930.webp', link: 'https://drive.google.com/file/d/1nYLKI7LH0lrez10XFEaF5ln_AglEO8WC/view?usp=sharing' },

]

const julyData = [
  { id: 1, img: '/assets/newspaper/july/july1.webp', link: "https://drive.google.com/file/d/1N4BbB7sd0iepIEg5cE2Zfs9q3YIFJhPF/view?usp=sharing" },
  { id: 2, img: '/assets/newspaper/july/july2.webp', link: "https://drive.google.com/file/d/10988mlaQNPy41RSTPSgBEHT0zS-fpAXo/view?usp=sharing" },
  { id: 3, img: '/assets/newspaper/july/july3.webp', link: "https://drive.google.com/file/d/1jmTd8Ul62jpSX1HRaw-zxrY582TMr4Js/view?usp=sharing" },
  { id: 4, img: '/assets/newspaper/july/july4.webp', link: "https://drive.google.com/file/d/1_NiS3max9H_CL7e2YLliZLnXKt7-ZYs0/view?usp=sharing" },
  { id: 5, img: '/assets/newspaper/july/july5.webp', link: "https://drive.google.com/file/d/1w9wyCKxYUEXIR0FN8272A1G3Jk19wTnv/view?usp=sharing" },
  { id: 6, img: '/assets/newspaper/july/july6.webp', link: "https://drive.google.com/file/d/1O_lUSrAlveFvKRXxzmWubdqDl8mfj_Jq/view?usp=sharing" },
  { id: 7, img: '/assets/newspaper/july/july7.webp', link: "https://drive.google.com/file/d/1OTn3-w6JWi3jhEhckkowRD33yFd5Cltu/view?usp=sharing" },
  { id: 8, img: '/assets/newspaper/july/july8.webp', link: "https://drive.google.com/file/d/1FB0CmJOpsGfm78Y9885utNayIIbYklmp/view?usp=sharing" },
  { id: 9, img: '/assets/newspaper/july/july9.webp', link: "https://drive.google.com/file/d/1i8BrioMBeS_GhBNVYHMxezjdG3tDypUk/view?usp=sharing" },
  { id: 10, img: '/assets/newspaper/july/july10.webp', link: "https://drive.google.com/file/d/1u2s7SBBcDrKJVTtMXgQxxhsu-RvRooG9/view?usp=sharing" },
  { id: 11, img: '/assets/newspaper/july/july11.webp', link: "https://drive.google.com/file/d/10I854-83vaJ4KgUjfL7SgFx_XNV879dS/view?usp=sharing" },
  { id: 12, img: '/assets/newspaper/july/july12.webp', link: "https://drive.google.com/file/d/1P3GgxtyKW-TgZWQHEfZG89uav4tzb96g/view?usp=sharing" },
  { id: 13, img: '/assets/newspaper/july/july13.webp', link: "https://drive.google.com/file/d/1nXJwvIQvsvknhEFJlsyt4GNV8ccljaZS/view?usp=sharing" },
  { id: 14, img: '/assets/newspaper/july/july14.webp', link: "https://drive.google.com/file/d/1REc3LjyfLQ6pDnVU7lZXp17Tybrc_1fE/view?usp=sharing" },
  { id: 15, img: '/assets/newspaper/july/july15.webp', link: "https://drive.google.com/file/d/1CA-zxzho1170oy-wzyPDNHHYoz4yT9PD/view?usp=sharing" },
  { id: 16, img: '/assets/newspaper/july/july16.webp', link: "https://drive.google.com/file/d/11R9TNG-O8bXUfjMHbLy8YTFdnrLoO6FI/view?usp=sharing" },
  { id: 17, img: '/assets/newspaper/july/july17.webp', link: "https://drive.google.com/file/d/1GtYqEPZub5tkxjs6HArCquZA7IMa914J/view?usp=sharing" },
  { id: 18, img: '/assets/newspaper/july/july18.webp', link: "https://drive.google.com/file/d/1ea7sRt7FFcb4ipvcdMMfpvjGv9ke7ePA/view?usp=sharing" },
  { id: 19, img: '/assets/newspaper/july/july19.webp', link: "https://drive.google.com/file/d/1wDdZk1j-U9xUcyzg_h8GItXXEywSP_as/view?usp=sharing" },
  { id: 20, img: '/assets/newspaper/july/july20.webp', link: "https://drive.google.com/file/d/1Qv3I7n73bkV98ggHpYCHfmvjm7FXfJ0P/view?usp=sharing" },
  { id: 21, img: '/assets/newspaper/july/july21.webp', link: "https://drive.google.com/file/d/135AVmgbys96k22IUr6akhlRF34EFo8b3/view?usp=sharing" },
  { id: 22, img: '/assets/newspaper/july/july22.webp', link: "https://drive.google.com/file/d/1beI3x16LeUS1W50IQTuyTjqH_PrHCsef/view?usp=sharing" },
  { id: 23, img: '/assets/newspaper/july/july23.webp', link: "https://drive.google.com/file/d/1fFTDL_t0ITPxVKjXwpaodLhhpNzbX_7d/view?usp=sharing" },
  { id: 25, img: '/assets/newspaper/july/july25.webp', link: "https://drive.google.com/file/d/1qaxy-sLdBSXFwrdnXCPLIxDB8Ss39KZ1/view?usp=sharing" },
  { id: 26, img: '/assets/newspaper/july/july26.webp', link: "https://drive.google.com/file/d/1YjnxL3m32_8k-fMk_FZi4T96DRzUvQqq/view?usp=sharing" },
  { id: 27, img: '/assets/newspaper/july/july27.webp', link: "https://drive.google.com/file/d/12V5MGsZ923QpPfuosGn_G7rAt7b8-D4O/view?usp=sharing" },
  { id: 28, img: '/assets/newspaper/july/july28.webp', link: "https://drive.google.com/file/d/19_M-U13CPnh11R9R4jbx1wR2l3hP57UU/view?usp=sharing" },
  { id: 29, img: '/assets/newspaper/july/july29.webp', link: "https://drive.google.com/file/d/1M9oABa8DVSwB7IFzpl-Oo2uYexo5y2hs/view" },
  { id: 30, img: '/assets/newspaper/july/july30.webp', link: "https://drive.google.com/file/d/15Xk3IbMiK2RZzOZK1GQIVXkeuPdFdrI2/view" },
  { id: 31, img: '/assets/newspaper/july/july31.webp', link: "https://drive.google.com/file/d/19GfG1RqkJOHm6eqE0JDKylJvrpW1jQ91/view?usp=sharing" },

]

const augData = [
  { id: 1, img: '/assets/newspaper/aug/aug1.webp', link: 'https://drive.google.com/file/d/17nw8wTeTor4VEczoNmWmzswWvYp1Ct9F/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/aug/aug2.webp', link: 'https://drive.google.com/file/d/1avMjetYWoOulGcbL4-X_5L4wGgKkl0uX/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/aug/aug3.webp', link: 'https://drive.google.com/file/d/11IYeBvDYQ4KTFNXYA-48ZnhZ5fzKOTER/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/aug/aug4.webp', link: 'https://drive.google.com/file/d/1PfCqV-8out848OaHT7nhki3Um-qzQuXc/view?usp=sharing' },
  { id: 5, img: '/assets/newspaper/aug/aug5.webp', link: 'https://drive.google.com/file/d/1TSVL2QvwfaF76J0wOfixkUAN2aVR6fE6/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/aug/aug6.webp', link: 'https://drive.google.com/file/d/1vDBz5x61A9QTs1HeEF7B_s6PMDBa-GuP/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/aug/aug7.jpg', link: 'https://drive.google.com/file/d/1kICOqB9OLFS2VeK64Z6jcc6PBJZdnb2F/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/aug/aug8.jpg', link: 'https://drive.google.com/file/d/11VAxB159cz9tMA2hy2C8qhSC9bgzqV1e/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/aug/aug9.jpg', link: 'https://drive.google.com/file/d/1FVIyMSYdmUGmGEWlVNQi2w68jkGyjMp7/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/aug/aug10.jpg', link: 'https://drive.google.com/file/d/1juN_vAVUz_tYfIkVY2aL7GLUTXwzZiuv/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/aug/aug11.jpg', link: 'https://drive.google.com/file/d/16SJnk358sb0oEGZC6iiIFCaRyoS6RWM6/view?usp=sharing' },
  { id: 12, img: '/assets/newspaper/aug/aug12.jpg', link: 'https://drive.google.com/file/d/1JDbFVJ0zGYGmFhFmyyPFM9o85vyPdtTN/view?usp=sharing' },
  { id: 13, img: '/assets/newspaper/aug/aug13.jpg', link: 'https://drive.google.com/file/d/167bWJJHyyNAKqjrcZKq72YPmBJWY8Ra0/view?usp=sharing' },
  { id: 14, img: '/assets/newspaper/aug/aug14.jpg', link: 'https://drive.google.com/file/d/1cc4MAc2gF--OGTUuv_GAyzU88PHpHISU/view?usp=sharing' },
  { id: 15, img: '/assets/newspaper/aug/aug15.jpg', link: 'https://drive.google.com/file/d/1_eKOr7Ec0giABbv2bVdM-w2BAtG5GzB1/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/aug/aug16.jpg', link: 'https://drive.google.com/file/d/1FnntjPY1HtqZDR0le59TzU8WHM1GiZO2/view?usp=sharing' },
  { id: 17, img: '/assets/newspaper/aug/aug17.jpg', link: 'https://drive.google.com/file/d/1id7Rt5yaYGKTRtzsBqqk-k6iz9bQW4bh/view?usp=sharing' },
  { id: 18, img: '/assets/newspaper/aug/aug18.jpg', link: 'https://drive.google.com/file/d/1QgwuKZk8_T5ZqSX6r9sXSOQZA9bK6-vU/view?usp=sharing' },
  { id: 19, img: '/assets/newspaper/aug/aug19.jpg', link: 'https://drive.google.com/file/d/1dI0TG3ElHYzrjxpshEm-m1L8B2-0FGsA/view?usp=sharing' },
  { id: 20, img: '/assets/newspaper/aug/aug20.jpg', link: 'https://drive.google.com/file/d/1hu8B_VA8I-3RdIhtJnlZpk6cdCDL5zEb/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/aug/aug21.jpg', link: 'https://drive.google.com/file/d/1k7ojzBwtMkNomDwqnuu2jV6XO2X1f8xz/view?usp=sharing' },
  { id: 22, img: '/assets/newspaper/aug/aug22.jpg', link: 'https://drive.google.com/file/d/1vxg8MkFJGD-tcwj4PBouXD6RKCycy1_i/view?usp=sharing' },
  { id: 23, img: '/assets/newspaper/aug/aug23.jpg', link: 'https://drive.google.com/file/d/1SyoOQo7CXAI5PQ88v3oa4Nn22itL2NKt/view?usp=sharing' },
  { id: 24, img: '/assets/newspaper/aug/aug24.jpg', link: 'https://drive.google.com/file/d/1hPtoW9UERsEfg2tpG8cpi84gWkhT8YOJ/view?usp=sharing ' },
  { id: 25, img: '/assets/newspaper/aug/aug25.jpg', link: 'https://drive.google.com/file/d/18-08jktRgcY0xpiVwHczd4essE5aRKHm/view?usp=sharing' },
  { id: 26, img: '/assets/newspaper/aug/aug26.jpg', link: 'https://drive.google.com/file/d/15yy3jb8fp-QyqZ3MCAiMD42KF_yGlRQ6/view?usp=sharing' },
  { id: 27, img: '/assets/newspaper/aug/aug27.jpg', link: 'https://drive.google.com/file/d/1uANB3LKxXICFX5I2yvRmS4bblFvM7HDR/view?usp=sharing' },
  { id: 28, img: '/assets/newspaper/aug/aug28.jpg', link: 'https://drive.google.com/file/d/1AztTDLVyTLJDYgA8RN26wMPgpRzdPr3d/view?usp=sharing' },
  { id: 29, img: '/assets/newspaper/aug/aug29.jpg', link: 'https://drive.google.com/file/d/1K0HfvUzHSqCX3o6miRVTJ9StrgZiikjd/view?usp=sharing' },
  { id: 30, img: '/assets/newspaper/aug/aug30.jpg', link: 'https://drive.google.com/file/d/1l22-8bF1G1oQjwLLg3NZ2NY2YllzFelK/view?usp=sharing' },
  { id: 31, img: '/assets/newspaper/aug/aug31.jpg', link: 'https://drive.google.com/file/d/1nKYcCyXmFsDx-q80oHHAuALafGGIlsm-/view?usp=sharing' }

]

const sepData = [
  { id: 1, img: '/assets/newspaper/sep/1sep.jpg', link: 'https://drive.google.com/file/d/1djkcO6qoJJkJ3tQ_fsKVVg5bj6lrvy7K/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/sep/2sep.jpg', link: 'https://drive.google.com/file/d/1aC3l_puwGbgj06xRb2swIG1ucqFre9qt/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/sep/3sep.jpg', link: 'https://drive.google.com/file/d/1K5U1Wqu0PrDYnKRDsay29dfYq0VszjJR/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/sep/4sep.jpg', link: 'https://drive.google.com/file/d/1zcayJ_RAg-VJYzmxzGFBdd24MxD34AWI/view?usp=sharing' },
  { id: 5, img: '/assets/newspaper/sep/5sep.png', link: 'https://drive.google.com/file/d/1fXJpjhQWf6vYulT7n4QTDzaSgk6MAJ81/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/sep/6sep.jpg', link: 'https://drive.google.com/file/d/1RCyVrA6LgiuCtSmFES7vpChk_GOMJ7VB/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/sep/7sep.jpg', link: 'https://drive.google.com/file/d/1scC3LLECRJsn-uXmqy9Fxho5heEj7RP7/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/sep/8.png', link: 'https://drive.google.com/file/d/1gbyRgw4dNW-rFUGhgHrhkRS__kG3VB4e/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/sep/10.png', link: 'https://drive.google.com/file/d/1SpaHoHAK4v5FmLTlVecP6GwqPmXOT30Y/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/sep/11sep.jpg', link: 'https://drive.google.com/file/d/10VMZJyUnd_-Yu_UP2ELR4ZG96TX-o9hK/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/sep/12sep.jpg', link: 'https://drive.google.com/file/d/1Nl8eDEzWcTKCvKZZzSV2YViXiZuAaTR6/view?usp=sharing' },
  { id: 12, img: '/assets/newspaper/sep/13sep.jpg', link: 'https://drive.google.com/file/d/1BfNaNiVLWOjXGSajHw5wCTsx4kX5qTr7/view?usp=sharing' },
  { id: 13, img: '/assets/newspaper/sep/14sep.jpg', link: 'https://drive.google.com/file/d/1rN9MDubl_14apUL-xzPdh6JpDce5LM37/view?usp=sharing' },
  { id: 14, img: '/assets/newspaper/sep/15sep.jpg', link: 'https://drive.google.com/file/d/18gylRvpie-3sps1ErqQlt5q_s_yaxw9P/view?usp=sharing' },
  { id: 15, img: '/assets/newspaper/sep/16sep.jpg', link: 'https://drive.google.com/file/d/1NiSEu9-20FdKlr6zFsibPaHnKFZlLa02/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/sep/17sep.jpg', link: 'https://drive.google.com/file/d/12Duz4hVRQ72xa7C1LxNmHtWddMPlQY-R/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/sep/18sep.jpg', link: 'https://drive.google.com/file/d/1mgWUkqSvfSjgA8hxNQ_ZxFrIeUwVOIRn/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/sep/19sep.jpg', link: 'https://drive.google.com/file/d/1IewxlWWxtEg_aufv7Nc7kxLt_7SJWjR4/view?usp=sharing' },
  { id: 17, img: '/assets/newspaper/sep/20sep.jpg', link: 'https://drive.google.com/file/d/1Sy7oH3vwVMfG-GD68F1T2XCIR5qfLlfD/view?usp=sharing' },
  { id: 18, img: '/assets/newspaper/sep/21sep.jpg', link: 'https://drive.google.com/file/d/1hDiPcEWqFFsfVNDqKkQKh4TezeRt1PEj/view?usp=sharing' },
  { id: 19, img: '/assets/newspaper/sep/22sep.jpg', link: 'https://drive.google.com/file/d/1NtqMlyXS_KYOkbpjgsf5d0g-w2jEwsRW/view?usp=sharing' },
  { id: 20, img: '/assets/newspaper/sep/23sep.jpeg', link: 'https://drive.google.com/file/d/1rDN3kjKyHav20EaoUbQM1Y_7CcuNXXQv/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/sep/24sep.jpeg', link: 'https://drive.google.com/file/d/1cvnQtH_ue2FvOAsT85rRUJYuNrfmyBA8/view?usp=sharing' },
  { id: 22, img: '/assets/newspaper/sep/25sep.jpeg', link: 'https://drive.google.com/file/d/1LOcqfQjMlFaoii45jQ_TzI0O2FQE3_UP/view?usp=sharing' },
  { id: 23, img: '/assets/newspaper/sep/26sep.jpeg', link: 'https://drive.google.com/file/d/1zuKWltYNLbc5qlR82DcBUfSmX_n4m4fi/view?usp=sharing' },
  { id: 24, img: '/assets/newspaper/sep/27sep.jpeg', link: 'https://drive.google.com/file/d/1628mHqrFfiYGgJmfN2B1TW6Ltq-u1LRv/view?usp=sharing' },
  { id: 24, img: '/assets/newspaper/sep/28sep.jpg', link: 'https://drive.google.com/file/d/103dbDtVVLBYEd0SJm2ODbgLkTA4UaUCb/view?usp=sharing' },
  { id: 25, img: '/assets/newspaper/sep/30sep.jpg', link: 'https://drive.google.com/file/d/1Udnk-9uYkb6qEBBwq4vIyfFzoPvj9gvS/view?usp=sharing' },
]

const octData = [
  { id: 1, img: '/assets/newspaper/oct/1oct.jpg', link: 'https://drive.google.com/file/d/1hfM4a1lSQUWhhQlMv5j0iJUdcU18hHoc/view?usp=sharing ' },
  { id: 2, img: '/assets/newspaper/oct/2oct.jpg', link: 'https://drive.google.com/file/d/1edVN4FjWX9z9X-8XJzPXMidX32q4JCYB/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/oct/3oct.jpeg', link: 'https://drive.google.com/file/d/1H1k0iIbCl1aSou_W5pZ4QhJUzVBpG65U/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/oct/4oct.jpeg', link: 'https://drive.google.com/file/d/1_g40cbYScIqamWheNC1OmOItLvqbIkSN/view?usp=sharing ' },
  { id: 5, img: '/assets/newspaper/oct/5oct.jpg', link: 'https://drive.google.com/file/d/1ovhAo76cc9WlsexVWMMB40NFV8VSax0-/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/oct/6oct.jpg', link: 'https://drive.google.com/file/d/1KFbQGR7YpJLLbfaJNXltYi0J01RfQ1iB/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/oct/7oct.jpg', link: 'https://drive.google.com/file/d/1UmoUof6O06YXTT5ZtKWNhjAq7KdO6ND_/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/oct/8oct.jpeg', link: 'https://drive.google.com/file/d/16py2HYxk6b7ESZY4GP4g2FqTpibvTPqj/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/oct/9oct.jpeg', link: 'https://drive.google.com/file/d/19DMjj9v6CN-0g51tweEKnFrbKDgzwCmX/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/oct/10oct.jpeg', link: 'https://drive.google.com/file/d/1XpTIVQxATtjKxBxTxWt52jMDBm362ZUv/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/oct/11oct.jpeg', link: 'https://drive.google.com/file/d/1thDHhB2r3oKCjXr8AJy2ftI7hCs7A_RN/view?usp=sharing' },
  { id: 13, img: '/assets/newspaper/oct/13oct.jpeg', link: 'https://drive.google.com/file/d/1nc7SVS3ZzRzEJrTXWeOzGf_C1dW76Xwm/view?usp=sharing' },
  { id: 14, img: '/assets/newspaper/oct/14oct.jpeg', link: 'https://drive.google.com/file/d/1KMy_TSUF4u-7cIyNkDtHOv08LGs3s-Os/view?usp=sharing' },
  { id: 15, img: '/assets/newspaper/oct/15oct.jpg', link: 'https://drive.google.com/file/d/1BPck1ssH1lIBLvAmvXVekarcLqX76ARB/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/oct/16oct.jpg', link: 'https://drive.google.com/file/d/1LwCKI2Bf92wkdCJvLyaGaE3uRrRTuK_a/view?usp=sharing' },
  { id: 17, img: '/assets/newspaper/oct/17oct.jpeg', link: 'https://drive.google.com/file/d/1XqQz_Ta4JyBTCU8ecXyq6bTcNq5Ca1p5/view?usp=sharing' },
  { id: 18, img: '/assets/newspaper/oct/18oct.jpeg', link: 'https://drive.google.com/file/d/1t6837NWHo7hhv5LDHy0g1DpRXz9QbvrP/view?usp=sharing' },
  { id: 19, img: '/assets/newspaper/oct/19oct.jpg', link: 'https://drive.google.com/file/d/1PQKM9084nbQ6sHaRf53DsGXQaAW2OmIv/view?usp=sharing' },
  { id: 20, img: '/assets/newspaper/oct/20oct.jpg', link: 'https://drive.google.com/file/d/1wL_pxumYMPPlB3lVTbbfoj4QPZptzFXL/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/oct/21oct.jpg', link: 'https://drive.google.com/file/d/1enG-E2qfMVsFkGwcs9qoBNjyFhrPRF7d/view?usp=sharing' },
  { id: 22, img: '/assets/newspaper/oct/22oct.jpg', link: 'https://drive.google.com/file/d/1BHIRcTExeQVh85NN8RPCnt6KOWxb6wge/view?usp=sharing' },
  { id: 23, img: '/assets/newspaper/oct/23oct.jpg', link: 'https://drive.google.com/file/d/150UVLX6dkSSc-NWfcQOkAVeRFIZB8Kkz/view?usp=sharing' },
  { id: 24, img: '/assets/newspaper/oct/24oct.jpg', link: 'https://drive.google.com/file/d/1uTaKtG7TbpyadL1iAwASSDSKw_TRPbLz/view?usp=sharing' },
  { id: 25, img: '/assets/newspaper/oct/25oct.jpg', link: 'https://drive.google.com/file/d/1buSWuoHf8i9XV9NcJwM51FMOczJ1oYxj/view?usp=sharing' },
  { id: 26, img: '/assets/newspaper/oct/26oct.jpg', link: 'https://drive.google.com/file/d/19_mVMTp-76WdwR2FpW1DBTCsV0J4vBQU/view?usp=sharing' },
  { id: 27, img: '/assets/newspaper/oct/27oct.jpg', link: 'https://drive.google.com/file/d/1zZG1UrVhO73HEq_85ieVceCanY7yHO--/view?usp=sharing' },
  { id: 27, img: '/assets/newspaper/oct/28oct.jpg', link: 'https://drive.google.com/file/d/1VO1XnYUjj85D4ah6m7QRLAG8h2Ox3d66/view?usp=sharing' },
  { id: 29, img: '/assets/newspaper/oct/29oct.jpeg', link: 'https://drive.google.com/file/d/1xlZ4i_8CquuxjCj0lqO0LzHqJsZ8qUoP/view?usp=sharing' },
  { id: 30, img: '/assets/newspaper/oct/30oct.jpg', link: 'https://drive.google.com/file/d/1UvF2nkQRyDzjScXeUxgKg-Qq_ZC5FCm1/view?usp=sharing' },
  { id: 31, img: '/assets/newspaper/oct/31oct.jpg', link: 'https://drive.google.com/file/d/1f9sM2PMC6Bas5EB24Mf1bqaNO0lyKER_/view?usp=sharing' },
  // {id:27,img:'/assets/newspaper/oct/27oct.jpg',link:''},


]


const novData = [
  { id: 1, img: '/assets/newspaper/nov/1nov.webp', link: "https://drive.google.com/file/d/1k5FNH8Ll_Hv-E9-5HPlpUF8Mnzud6lkm/view?usp=sharing" },
  // {id:2,img:'/assets/newspaper/nov/2nov.webp',link:""},
  { id: 3, img: '/assets/newspaper/nov/3nov.webp', link: "https://drive.google.com/file/d/1B66gCCAm-VnRmIgXX-nrPtAwSCeXa8Pm/view?usp=sharing" },
  { id: 4, img: '/assets/newspaper/nov/4nov.webp', link: "https://drive.google.com/file/d/1YOTZ5lqAdp3hH61kNSUfVTuVyFYZ5U3K/view?usp=sharing" },
  { id: 5, img: '/assets/newspaper/nov/5nov.jpeg', link: "https://drive.google.com/file/d/1kLX6zCAOjlPf1IFAnOL82LND2LuD5W6z/view?usp=sharing" },
  { id: 6, img: '/assets/newspaper/nov/6nov.jpeg', link: "https://drive.google.com/file/d/1zzKXoiznjezKsMQMbNSSAEQna87H0VZp/view?usp=sharing" },
  { id: 7, img: '/assets/newspaper/nov/7nov.jpeg', link: "https://drive.google.com/file/d/143tZlBCd7kEP2-_fUYDtamL7yLVz3Dzr/view?usp=sharing" },
  { id: 8, img: '/assets/newspaper/nov/8nov.jpeg', link: "https://drive.google.com/file/d/1yZ7yreY3fedExqfeDutwXVB-HvuVpPaT/view?usp=sharing" },
  { id: 9, img: '/assets/newspaper/nov/9nov.png', link: "https://drive.google.com/file/d/1IZ172ytOrzq1ABWGwANav238Q8VOgpow/view?usp=sharing" },
  { id: 9, img: '/assets/newspaper/nov/10nov.jpeg', link: "https://drive.google.com/file/d/14bApsDoR8Zrr63PcQzeXBQgQQnjlFFkb/view?usp=sharing" },
  { id: 10, img: '/assets/newspaper/nov/11nov.jpeg', link: "https://drive.google.com/file/d/1UlU7VtG4mA9ooOPO_W_GkJ_zLnKsCk8f/view?usp=sharing" },
  { id: 11, img: '/assets/newspaper/nov/12nov.jpeg', link: "https://drive.google.com/file/d/1atVzQzA5n4-lfZG5xd8vA9Lb24b2sY3X/view?usp=sharing" },
  { id: 12, img: '/assets/newspaper/nov/13nov.jpeg', link: "https://drive.google.com/file/d/1u0ob_xcias_oATe3w_pWgypdPRaLAgyV/view?usp=sharing" },
  { id: 13, img: '/assets/newspaper/nov/14nov.jpeg', link: "https://drive.google.com/file/d/1CkMJ3FYxzjNwXK9DacHlsslM4GaEuv_U/view?usp=sharing" },
  { id: 14, img: '/assets/newspaper/nov/15nov.jpeg', link: "https://drive.google.com/file/d/1jERrxDLh8oPw2KMVv5wycztycXpChUM7/view?usp=sharing" },
  { id: 15, img: '/assets/newspaper/nov/16nov.png', link: "https://drive.google.com/file/d/1hw4wBVVJj_XEy7SURwAYO-TvQqVXoCGa/view?usp=sharing" },
  { id: 16, img: '/assets/newspaper/nov/17nov.png', link: "https://drive.google.com/file/d/1oRoEDDpWr7HikqfP8V_Te2i6BkUIKjJ-/view?usp=sharing" },
  { id: 17, img: '/assets/newspaper/nov/18nov.png', link: "https://drive.google.com/file/d/1bxTQ-Ss4wH4fFed0BLpbF4c6Dc20rXWf/view?usp=sharing" },
  { id: 18, img: '/assets/newspaper/nov/19nov.png', link: "https://drive.google.com/file/d/1nFCZ8KI1mDWrwyWkWTr-iYs2RYsleRGy/view?usp=sharing" },
  { id: 19, img: '/assets/newspaper/nov/20nov.png', link: "https://drive.google.com/file/d/1oB7kG7OgVAqm4juDWQIn2c61-uZfSQyY/view?usp=sharing" },
  { id: 20, img: '/assets/newspaper/nov/21nov.png', link: "https://drive.google.com/file/d/1-fg7mU2HUjIAjWzF15ErthAVVc_hVKkH/view?usp=sharing" },
  { id: 21, img: '/assets/newspaper/nov/22nov.png', link: "https://drive.google.com/file/d/1PVAdGFszGHU07Uh96l0KycdfIzXMEBgm/view?usp=sharing" },
  { id: 22, img: '/assets/newspaper/nov/23nov.png', link: "https://drive.google.com/file/d/1OEO2dMN2ZMtXr7-B0L8Hr3SZL-yRo6oY/view?usp=sharing" },
  { id: 23, img: '/assets/newspaper/nov/24nov.png', link: "https://drive.google.com/file/d/1H-R0_Vm0AsXawKJW7qsIgwSdQGJQDB_T/view?usp=sharing" },
  { id: 24, img: '/assets/newspaper/nov/25nov.png', link: "https://drive.google.com/file/d/1t9Sh8rCv-N8wTzBa0h4vZjKoAmb83gKC/view?usp=sharing" },
  { id: 25, img: '/assets/newspaper/nov/26nov.png', link: "https://drive.google.com/file/d/1UVROIcqO91SGGqRORjVnL4TDNpd3gI3T/view?usp=sharing" },
  { id: 26, img: '/assets/newspaper/nov/27nov.png', link: "https://drive.google.com/file/d/1WgZUANOy2f4WZWXFUq21bHowVlcIVOwI/view?usp=sharing" },
  { id: 27, img: '/assets/newspaper/nov/28nov.png', link: "https://drive.google.com/file/d/1ZA9WV0cQ4loePCMuKCWMw02OJpNhzA_2/view?usp=sharing" },
  // {id:28,img:'/assets/newspaper/nov/29nov.png',link:""},
  // {id:29,img:'/assets/newspaper/nov/30nov.png',link:""},
]
const devdata = [
  { id: 1, img: '/assets/newspaper/dec/1dec.jpg', link: "https://drive.google.com/file/d/1dbxTsLJH05ro_HpGCgSiA7rV5dflqGCg/view?usp=sharing" },
  { id: 2, img: '/assets/newspaper/dec/2dec.jpg', link: "https://drive.google.com/file/d/1x-BBuK10sJFPtjZChLKAmer8iG7zcdn3/view?usp=sharing" },
  { id: 3, img: '/assets/newspaper/dec/3dec.jpg', link: "https://drive.google.com/file/d/1NxyNINXojdFgGDsmA4P1_R3tkSCn4eAo/view?usp=sharing" },
  { id: 4, img: '/assets/newspaper/dec/4dec.jpg', link: "https://drive.google.com/file/d/1Qg-nz2Dcu5UiStHbPlu72j28AimL7q-a/view?usp=sharing" },
  { id: 5, img: '/assets/newspaper/dec/5dec.jpg', link: "https://drive.google.com/file/d/1QldhxOR1ZmVci1wpuFNu6-KYJq_DrIji/view?usp=sharing" },
   {id:6,img:   '/assets/newspaper/dec/6dec.jpg',link:"https://drive.google.com/file/d/1csLanR_ter4GppPWLy9vPwdqxwJz29Rq/view?usp=sharing"},
   {id:7,img:   '/assets/newspaper/dec/7dec.jpg',link:"https://drive.google.com/file/d/1CS6Fd7Jg9fmvTO3YlfVqwTteZa6PBgox/view?usp=sharing"},
   {id:8,img:'/assets/newspaper/dec/8dec.jpg',link:"https://drive.google.com/file/d/1myuQlemnLEnkLbcCAlZXNHb1TEt1JNeY/view?usp=sharing"},
   {id:9,img:'/assets/newspaper/dec/9dec.jpg',link:"https://drive.google.com/file/d/1H7fFw0IEIRSqc9DGtL8hXN19z7RrP2Bd/view?usp=sharing"},
   {id:10,img:'/assets/newspaper/dec/10dec.jpg',link:"https://drive.google.com/file/d/1wcBxZd4b26rr7x4nd99_11iGEeKCAJu5/view?usp=sharing"},
   {id:11,img:'/assets/newspaper/dec/11dec.jpg',link:"https://drive.google.com/file/d/1CdJEWx3lMFhwGu1y40G-0ttpgTNAUHUR/view?usp=sharing"},
   {id:12,img:'/assets/newspaper/dec/12dec.jpg',link:"https://drive.google.com/file/d/1h9ZMYwiGr8U_8sqF47BLMpOwOr2ji1z5/view?usp=sharing"},
   {id:13,img:'/assets/newspaper/dec/13dec.jpg',link:"https://drive.google.com/file/d/1imfCpKE7fLa4T0ymIVKfYZiibnU1eHUf/view?usp=sharing"},
   {id:14,img:'/assets/newspaper/dec/14dec.jpg',link:"https://drive.google.com/file/d/1AJZCFGbqdBFmu5wmz8YkxmbHUQyujkMe/view?usp=sharing"},
   {id:15,img:'/assets/newspaper/dec/15dec.jpg',link:"https://drive.google.com/file/d/1SJj4vfzBhJhuUMuPvwOROAzCa6rqHqJe/view?usp=sharing"},
   {id:16,img:'/assets/newspaper/dec/16dec.jpg',link:"https://drive.google.com/file/d/14Ip14VkNrzmmPah1hF7MYi_K25M5wQIp/view?usp=sharing"},
   {id:17,img:'/assets/newspaper/dec/17dec.jpg',link:"https://drive.google.com/file/d/18U_CrcWDw57f33natwvxwNGWmVcc852n/view?usp=sharing"},
   {id:18,img:'/assets/newspaper/dec/18dec.jpg',link:"https://drive.google.com/file/d/1NSfAxTrHcr68dhqOayuqxjOm_1Ma3zpg/view?usp=sharing"},
   {id:19,img:'/assets/newspaper/dec/19dec.jpg',link:"https://drive.google.com/file/d/1jJ7rb9SGEq0gzIukxRnLBn0wCumm-Qz8/view?usp=sharing"},
   {id:20,img:'/assets/newspaper/dec/20dec.jpg',link:"https://drive.google.com/file/d/1Hw4fnYX4vAoSgqFepknLPqpf6mLSt1br/view?usp=sharing"},
   {id:21,img:'/assets/newspaper/dec/21dec.jpg',link:"https://drive.google.com/file/d/1pQEZngm3h36RSakas4b1DRcb0zXEkkSt/view?usp=sharing"},
   {id:22,img:'/assets/newspaper/dec/22dec.jpg',link:"https://drive.google.com/file/d/1HNrOk9lJ6XIgcc_8Gb4f-6H5vxXlDHiX/view?usp=sharing"},
   {id:23,img:'/assets/newspaper/dec/23dec.jpg',link:"https://drive.google.com/file/d/1TRaosx97E4LJCwA7J-kK5ApIByRiQ4OJ/view?usp=sharing"},
   {id:24,img:'/assets/newspaper/dec/24dec.jpg',link:"https://drive.google.com/file/d/1Zzlr5Lb3f_dAyoFM_WlY8WzzJpUqU9mU/view?usp=sharing"},
   {id:25,img:'/assets/newspaper/dec/25dec.jpg',link:"https://drive.google.com/file/d/1IkReFVKGxhwCVhI5AYPEwEWnfb2zuqSC/view?usp=sharing"},
   {id:26,img:'/assets/newspaper/dec/26dec.jpg',link:"https://drive.google.com/file/d/1HGv1qVamWCVoISmnZDrVXAvXJneIuFfZ/view?usp=sharing"},
   {id:27,img:'/assets/newspaper/dec/27dec.jpg',link:"https://drive.google.com/file/d/1CxYkmOzdB0o8tWzBcnc2fgJIM26CTvJl/view?usp=sharing"},
]

const janData=[
  {id:1,img:'/assets/newspaper/jan2025/1jan.jpg',link:'https://drive.google.com/file/d/1C9QjTieislhE0EcO8r-l9Xl0qOJTMNKO/view?usp=sharing'},
  {id:2,img:'/assets/newspaper/jan2025/2jan.jpg',link:'https://drive.google.com/file/d/1yJu31ltAsIBTEY7hhastfqVYMD8wrw5V/view?usp=sharing'},
  {id:3,img:'/assets/newspaper/jan2025/3jan.jpg',link:'https://drive.google.com/file/d/1q-UJ6UNxXNLjah5H4hm-RWcVI9ppRKv9/view?usp=sharing'},
  {id:4,img:'/assets/newspaper/jan2025/4jan.jpg',link:'https://drive.google.com/file/d/1z-WivwMKGVYLdWPRM3dCK6UBvtgCJtQi/view?usp=sharing'},
  {id:5,img:'/assets/newspaper/jan2025/5jan.jpg',link:'https://drive.google.com/file/d/1VALWaAw2m7Afz0FN0qr1j5boz9WdhUyf/view?usp=sharing'},
   {id:6,img:'/assets/newspaper/jan2025/6jan.jpg',link:'https://drive.google.com/file/d/1ptlU3vVMxvxBpjZOFn_geI2JU6VL1TuV/view?usp=sharing'},
   {id:7,img:'/assets/newspaper/jan2025/7jan.jpg',link:'https://drive.google.com/file/d/1mY4oBUmirZpnAOw2hYS8YIlcWDVfvd21/view?usp=sharing'},
   {id:8,img:'/assets/newspaper/jan2025/8jan.jpg',link:'https://drive.google.com/file/d/16zu08uFurgQ2WSFtInskmrf9_J0KvO0R/view?usp=sharing'},
   {id:9,img:'/assets/newspaper/jan2025/9jan.jpg',link:'https://drive.google.com/file/d/1_HpoOr_Ns41nfBOXvCC5GRtxS-1Wt6KN/view?usp=sharing'},
   {id:10,img:'/assets/newspaper/jan2025/10jan.jpg',link:'https://drive.google.com/file/d/10bneF5HJiVtfrUOCTeX2PEo3s43DSwo_/view?usp=sharing'},
   {id:11,img:'/assets/newspaper/jan2025/11jan.jpg',link:'https://drive.google.com/file/d/1FmfCJsKjTtBREnk8fJhdHXWUGQ0X9eXT/view?usp=sharing'},
   {id:12,img:'/assets/newspaper/jan2025/12jan.jpg',link:'https://drive.google.com/file/d/1WEwiqlXTRGS6wFRfk14AI3SbM9Lpqn8s/view?usp=sharing'},
   {id:13,img:'/assets/newspaper/jan2025/13jan.jpg',link:'https://drive.google.com/file/d/16RXjzZvr4CtuPg8Y7jnIhpPTf1ku_WUA/view?usp=sharing'},
   {id:14,img:'/assets/newspaper/jan2025/14jan.jpg',link:'https://drive.google.com/file/d/1m9s93m6jgNsr-JnQI1vKb8SYu9GKxfUn/view?usp=sharing'},
   {id:15,img:'/assets/newspaper/jan2025/16jan.jpg',link:'https://drive.google.com/file/d/1J5uekMCsh9WTp6U7wwmh55JRkSJQMo4i/view?usp=sharing'},
   {id:16,img:'/assets/newspaper/jan2025/17jan.jpg',link:'https://drive.google.com/file/d/1TMfgLKXgylGdE0JpRe5Qs8iteZpChlYn/view?usp=sharing'},
   {id:17,img:'/assets/newspaper/jan2025/18jan.jpg',link:'https://drive.google.com/file/d/1GJ-D5lAxbu3UxN7-8hwsBAg9uvIp57dc/view?usp=sharing'},
   {id:18,img:'/assets/newspaper/jan2025/19jan.jpg',link:'https://drive.google.com/file/d/1PLF0anptJYNFBVyyQBZ4uPpg5Umxqe5y/view?usp=sharing'},
   {id:19,img:'/assets/newspaper/jan2025/20jan.jpg',link:'https://drive.google.com/file/d/139mRN0gTt11w2FxuoY9Rnt-AszAD3QYS/view?usp=sharing'},
   {id:20,img:'/assets/newspaper/jan2025/21jan.jpg',link:'https://drive.google.com/file/d/12jI-p_hElfJS2EyPK7SlTxd7aW02Yci2/view?usp=sharing'},
   {id:21,img:'/assets/newspaper/jan2025/22jan.jpg',link:'https://drive.google.com/file/d/1brJKbSkA52TySLMCzk8RknUgUKCM6jyi/view?usp=sharing'},
   {id:22,img:'/assets/newspaper/jan2025/23jan.jpg',link:'https://drive.google.com/file/d/1yx18YnlACYc-dvCI_bWUVpKWc5MNH70J/view?usp=sharing'},
   {id:23,img:'/assets/newspaper/jan2025/24jan.jpg',link:'https://drive.google.com/file/d/1XYU3b7V6EtLNqhpCWfzGfiE0IWL_tLVU/view?usp=sharing'},
   {id:24,img:'/assets/newspaper/jan2025/25jan.jpg',link:'https://drive.google.com/file/d/1XjVd5JhAd_kRINOMidx5MeCM5kMm5f7S/view?usp=sharing'},
   {id:25,img:'/assets/newspaper/jan2025/26jan.jpg',link:'https://drive.google.com/file/d/1vqjmuQDo1VdN7L91J9banwszF2makPjR/view?usp=sharing'},
   {id:26,img:'/assets/newspaper/jan2025/27jan.jpg',link:'https://drive.google.com/file/d/1MBcJohBSNSb45SLL-dVhAK3fIrPkXEzs/view?usp=sharing'},
   {id:27,img:'/assets/newspaper/jan2025/28jan.jpg',link:'https://drive.google.com/file/d/1zmPfkcHsczmv3v8Tw-yFw5rgurGcloL_/view?usp=sharing'},
   {id:28,img:'/assets/newspaper/jan2025/29jan.jpg',link:'https://drive.google.com/file/d/1aXs7UopruK1lKg7NqZp9kChtFrYoef82/view?usp=sharing'},
   {id:29,img:'/assets/newspaper/jan2025/30jan.jpg',link:'https://drive.google.com/file/d/1mI-THVQNQ1dwefEKa1p7bmy-vs8NqjCj/view?usp=sharing'},
   {id:30,img:'/assets/newspaper/jan2025/31jan.jpg',link:'https://drive.google.com/file/d/1IkotMU_5waD7yJF4Wb4eWTnV6te76nIt/view?usp=sharing'},

  //  {id:25,img:'/assets/newspaper/jan2025/17jan.jpg',link:''},

]

const febData = [
  {id:1,img:'/assets/newspaper/feb2025/1feb.jpg',link:"https://drive.google.com/file/d/1cuskun_lua8iGxbGtCUo7CFalwiilQPp/view?usp=sharing"},
  {id:2,img:'/assets/newspaper/feb2025/2feb.jpg',link:"https://drive.google.com/file/d/1lysjDZ2fwFlkk_wOZCvdOiv6S00-fzeV/view?usp=sharing"},
  {id:3,img:'/assets/newspaper/feb2025/3feb.jpg',link:"https://drive.google.com/file/d/1v5kiHblIVPvOIdFI3Oty8X9XwiQ0FK-K/view?usp=sharing"},
  {id:4,img:'/assets/newspaper/feb2025/4feb.jpg',link:"https://drive.google.com/file/d/1MYsEnS6RUHw8LNvWBfIXU_VTuslX7NGB/view?usp=sharing"},
  {id:5,img:'/assets/newspaper/feb2025/5feb.jpg',link:"https://drive.google.com/file/d/1p5UV7M9DiO8VJNVd7Ka_QLEpHHKKQKxU/view?usp=sharing"},
  {id:6,img:'/assets/newspaper/feb2025/6feb.jpeg',link:"https://drive.google.com/file/d/1tzHcsiQHdl7Kk4ylritQWUkrQUX0mW67/view?usp=sharing"},
  {id:7,img:'/assets/newspaper/feb2025/7feb.jpeg',link:"https://drive.google.com/file/d/1_1TvlBYgYesiq6W0U6w_YpxcurWLU_BH/view"},
  {id:8,img:'/assets/newspaper/feb2025/8feb.jpeg',link:"https://drive.google.com/file/d/1Z99VoJZhUh7Zq8fSnlv-xH3Iu1wgQrJI/view"},
  {id:9,img:'/assets/newspaper/feb2025/9feb.jpeg',link:"https://drive.google.com/file/d/1MGKakQIoOkVop-CYqcuf5pNqY-FwZP9T/view?usp=sharing"},
  {id:10,img:'/assets/newspaper/feb2025/10feb.jpeg',link:"https://drive.google.com/file/d/12e7hpAA2n3z0xhc5I65pjNIOBdevsOXQ/view?usp=sharing"},
  {id:11,img:'/assets/newspaper/feb2025/11feb.jpeg',link:"https://drive.google.com/file/d/1JiJOqALwKV3KmGgikjEe1nkS3gVLfQMJ/view?usp=sharing"},
  // {id:12,img:'/assets/newspaper/feb2025/5feb.jpeg',link:""},
  // {id:13,img:'/assets/newspaper/feb2025/5feb.jpg',link:""},
  // {id:14,img:'/assets/newspaper/feb2025/5feb.jpg',link:""},
  // {id:15,img:'/assets/newspaper/feb2025/5feb.jpg',link:""},


]
const april2025 = [
  { id: 1, img: '/assets/newspaper/april2025/april1.jpeg', link: 'https://drive.google.com/file/d/1IeGVZjj7zWwVE-nA532LafEEt2R5M0Lh/view' },
  { id: 2, img: '/assets/newspaper/april2025/april2.jpeg', link: 'https://drive.google.com/file/d/1dmCNGZuvoKyvzXN5eLNMa6qXCiyInIce/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/april2025/april3.jpeg', link: 'https://drive.google.com/file/d/1hGoOs6U-SrWFUJZwD6oP2xuB-rvtNsqK/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/april2025/april4.jpeg', link: 'https://drive.google.com/file/d/1k7jNkfZLuMIjxrZoG7CmU-CZZR-ocWBS/view?usp=sharing' },
  { id: 5, img: '/assets/newspaper/april2025/april5.jpeg', link: 'https://drive.google.com/file/d/1DyH62zyJIFQwOLg79hbLsZCPIh_EnGoV/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/april2025/april6.jpeg', link: 'https://drive.google.com/file/d/1hb2evohDX1GASmcpDPv17ge_zIQXwW5G/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/april2025/april7.jpeg', link: 'https://drive.google.com/file/d/1a0J8nUrtq9WhMeWjKXZvBrhTDXr6WOCA/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/april2025/april8.jpeg', link: 'https://drive.google.com/file/d/125tjz3H-XYwDgCxyznn7HULZ3VBnOiAN/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/april2025/april9.jpeg', link: 'https://drive.google.com/file/d/1khJyLGkn9foyihzMPRe41si_V6B4KVxO/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/april2025/april10.jpeg', link: 'https://drive.google.com/file/d/1K9JN4bkrrle6d2R4RZk70EycE28IAlp1/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/april2025/april11.jpeg', link: 'https://drive.google.com/file/d/1OEQO1sS7bH8GnPi0f5zy5fGkFxJiLtl_/view?usp=sharing' },
  { id: 12, img: '/assets/newspaper/april2025/april12.jpeg', link: 'https://drive.google.com/file/d/1VXwMJurVb_J9XL6QqncSnhqhINai6ql_/view?usp=sharing' },
]

const tabData = [
  { id: 1, label: 'JANUARY 2025' },
  { id: 2, label: 'FEBRUARY 2025' },
  { id: 3, label: 'APRIL 2025' },
];


const Optional2025 = () => {
  const [value, setValue] = useState(0);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:1337/newspaper-notes');
        console.log('Response:', response); // Log the entire response object
        setNotes(response.data); // Assuming the response data is an array of notes
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();

    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"))

  const renderGridItems = (data) => (
    <Grid container>
      {data.map(item => (
        <Grid key={item.id} item xs={12} sm={6} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>

          <Paper sx={{ width: 250, height: 140, display: 'flex', flexDirection: 'column', margin: '5px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img style={{ width: '100%', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`} />
            </a>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box>
      <Box className="material-page" sx={{ width: '100%', marginTop: isMobileView ? "100px" : "110px", position: 'relative', height: '150px', backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)" }}>
        <Typography variant="h4" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', fontSize: isMobileView ? "20px" : "50px" }}>
          NEWSPAPER NOTES
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', marginTop: '10px', display: 'flex', marginBottom: isMobileView ? '10px' : '200px', flexDirection: isMobileView ? "column" : 'row', justifyContent: 'space-evenly', width: '100%' }}>
        {!isMobileView && (
          <Tabs orientation={isMobileView ? "horizontal" : 'vertical'} value={value} onChange={handleChange} variant="scrollable" aria-label="Vertical tabs example" sx={{ height: isMobileView ? "" : '600px', marginLeft: '10px', padding: '10px', width: isMobileView ? "100%" : "500px", display: 'flex', alignItems: 'center', justifyContent: isMobileView ? "space-between" : "", backgroundColor: isMobileView ? "" : 'rgba(8,24,68,1)', borderRadius: '10px', borderColor: 'white' }}>
            {tabData.map(tab => (
              <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} sx={{ bgcolor: value === tab.id ? 'lightblue' : 'white', color: 'black', marginRight: isMobileView ? '5px' : '15px', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
            ))}
          </Tabs>
        )}

        {isMobileView && (
          <Box sx={{ bgcolor: 'background.paper', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example" sx={{ width: '100%' }}>
              {tabData.map(tab => (
                <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} sx={{ bgcolor: value === tab.id ? 'lightblue' : 'white', color: 'black', marginRight: '10px', marginBottom: '10px', marginLeft: '10px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', maxWidth: '300px' }} />
              ))}
            </Tabs>
          </Box>
        )}
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          {tabData.map((tab, index) => (
            <TabPanel key={tab.id} value={value} index={index} sx={{ marginLeft: isMobileView ? '' : '20px', marginRight: isMobileView ? '' : '20px', marginTop: isMobileView ? '10px' : '' }}>
              {value === 0 && renderGridItems(janData)}
              {value === 1 && renderGridItems(febData)}
              {value === 2 && renderGridItems(april2025)}
            </TabPanel>
          ))}
        </Box>

      </Box>
    </Box>
  )
}

export default Optional2025

