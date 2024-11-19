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
  { id: 0, img:"/assets/newspaper/april/newnotes1.webp",link:"https://drive.google.com/file/d/1oXuXL6QoP9b8pzh5zDxLCcm51EmFxN5Z/view?usp=sharing" },
  { id: 1, img:"/assets/newspaper/april/newnotes2.webp",link:"https://drive.google.com/file/d/15ra86K7KtS9vCTvWUhoMKtFLJnDGVdvH/view?usp=sharing" },
  { id: 2, img:"/assets/newspaper/april/newnotes3.webp",link:"https://drive.google.com/file/d/1sC5LhQI9bOK9yJ9wq3eRCPCaNiS3a_ju/view?usp=sharing" },
  { id: 3, img:"/assets/newspaper/april/newnotes4.webp",link:"https://drive.google.com/file/d/1dhnYQf2LTxPcCDP2gEBq3Ib2_b86SD5Z/view?usp=sharing" },
  { id: 4, img:"/assets/newspaper/april/newnotes5.webp",link:"https://drive.google.com/file/d/1sjCWIjb5Rij9M3YdkyWXaDOmVnOMu_Bf/view?usp=sharing" },
  { id: 5, img:"/assets/newspaper/april/newnotes6.webp",link:"https://drive.google.com/file/d/1L3c7kmbUtkzy07w0oM_8chG9HBp00dZH/view?usp=sharing" },
  { id: 6, img:"/assets/newspaper/april/newnotes7&8.webp",link:"https://drive.google.com/file/d/12bmcjBwZO4CS8fEmP4X70UqklvymjGRp/view?usp=sharing" },
  { id: 7, img:"/assets/newspaper/april/newnotes9.webp",link:"https://drive.google.com/file/d/1kzNHb0YNAQgLarZec4PjmpJoP6utHTo8/view?usp=sharing" },
  { id: 9, img:"/assets/newspaper/april/newnotes10.webp",link:"https://drive.google.com/file/d/10IawnY4lBnrOsbRHoVQbLZ2e2H6mUwBZ/view?usp=sharing" },
  { id: 10, img:"/assets/newspaper/april/newnotes11.webp",link:"https://drive.google.com/file/d/1XNm7Ja48KaLCiud-HB-YB_QIfxgp8mi4/view" },
  { id: 11, img:"/assets/newspaper/april/newnotes12.webp",link:"https://drive.google.com/file/d/1ENBeQCOQAUAHGR7BiRHKr8F4VrSz1L6r/view" },
  { id: 12, img:"/assets/newspaper/april/newnotes13.webp",link:"https://drive.google.com/file/d/1eCugFdgcYTGaNK20muUmYz1TYJNRWQRp/view?usp=sharing" },
  { id: 13, img:"/assets/newspaper/april/newnotes14&15.webp",link:"https://drive.google.com/file/d/1WH27BuL2pyGpPvTFRYxhwOhIci4uI1Nu/view?usp=sharing" },
  { id: 14, img:"/assets/newspaper/april/newnotes16.webp",link:"https://drive.google.com/file/d/1BKGC2g15MBPW2ZcF5TALcFk3pdgpowHz/view?usp=sharing" },
  { id: 15, img:"/assets/newspaper/april/newnotes17.webp",link:"https://drive.google.com/file/d/1pde3YxdeOP3-S6oUeAe9Bd1U0fbfTkF9/view?usp=sharing" },
  { id: 16, img:"/assets/newspaper/april/newsnotes18.jpg",link:"https://drive.google.com/file/d/1Xw8TdEZJO7K0_8ejhljNv8DzVjuyoOJw/view?usp=sharing" },
  { id: 17, img:"/assets/newspaper/april/newsnotes19.jpg",link:"https://drive.google.com/file/d/12tAjNSwnlFOj5F-G_LBb_ITCgibvGRGZ/view?usp=sharing" },
  { id: 18, img:"/assets/newspaper/april/newsnotes20.jpg",link:"https://drive.google.com/file/d/1GkYy2yGCE0RTMtSeAIBf3zKULwNexDCn/view?usp=sharing" },
  { id: 19, img:"/assets/newspaper/april/newsnotes21&22.jpg",link:"https://drive.google.com/file/d/1CR5h8cKBYjtrsAciOUjZC_5CfrGTRZgY/view" },
  { id: 20, img:"/assets/newspaper/april/newsnotes23.jpg",link:"https://drive.google.com/file/d/1d2ICMwUkTcTeBBaImS90WR3nbVeikFKr/view" },
  { id: 21, img:"/assets/newspaper/april/newnotes24.webp",link:"https://drive.google.com/file/d/1L0p07nJ28DXiveSB8ibWmKfHk97JdowT/view" },
  { id: 22, img:"/assets/newspaper/april/newnotes25.webp",link:"https://drive.google.com/file/d/1UObjZcZ6-nwsW0UT2GgsTXKYncPIwVER/view " },
  { id: 23, img:"/assets/newspaper/april/newnotes26.webp",link:"https://drive.google.com/file/d/15LFZ4ihpHzR5Ji2QMKyGEW6c5K2lOI63/view?usp=sharing " },
  { id: 24, img:"/assets/newspaper/april/newnotes27.webp",link:"https://drive.google.com/file/d/1QdLBmjCVGHzCODtjTChoZO9W8oPv4Oik/view?usp=sharing " },
  { id: 25, img:"/assets/newspaper/april/newnotes28&29.webp",link:"https://drive.google.com/file/d/1ArzVjWb2qCAEwxroSLL9hf5Ui1FUwErb/view?usp=sharing" },
  { id: 26, img:"/assets/newspaper/april/newnotes30.webp",link:"https://drive.google.com/file/d/1ziuYj-sIGC0S1JQ4PNO0-T10B-YgndbX/view" },



];

const maydata = [
  { id: 1, img:'/assets/newspaper/may/newnotesmay1.webp',link:'https://drive.google.com/file/d/1WwqSvAUXEJ-98woVB_p2em2RjF6gPqBm/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/may/newnotesmay2.webp',link:'https://drive.google.com/file/d/1-ZVAZ6Epqxz-3fGrmbVoPygfL_Hk4j9d/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/may/newnotesmay3.webp',link:'https://drive.google.com/file/d/1m-Mn3Ng2hJCla0JmMLddSKjPUktskRO-/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/may/newnotesmay4.webp',link:'https://drive.google.com/file/d/1FpUB1dY_eY9xUxZp2Z5dwHmuRgwNWFhm/view?usp=sharing ' },
  { id:5, img :'/assets/newspaper/may/newnotesmay56.webp',link:'https://drive.google.com/file/d/1qNgoejG9ncamMACHGB3Uo5FQS6FKTvL9/view?usp=sharing '},
  { id:6, img :'/assets/newspaper/may/may7.webp',link:'https://drive.google.com/file/d/1fpLMuEiel7yJ98oBZo_Fqn3priXn-YPR/view?usp=sharing '},
  { id:7, img :'/assets/newspaper/may/may8.webp',link:' https://drive.google.com/file/d/1zl4LBe6zGKf1bkvFlRYdJUL1dvtzWGhy/view?usp=sharing'},
  { id:8, img :'/assets/newspaper/may/may9.webp',link:'https://drive.google.com/file/d/1Zm3bK27X9QRSUqqYKM75BLsd1niybIB9/view?usp=sharing '},
  { id:9, img :'/assets/newspaper/may/may10.webp',link:'https://drive.google.com/file/d/1XLmVujrEIYW7zNEsO31h3RDfecewvE7s/view?usp=sharing'},
  { id:10, img :'/assets/newspaper/may/may11.webp',link:' https://drive.google.com/file/d/1g0jfjFXI1Q2zblwfXlBVbOb9NF8w3sMU/view?usp=sharing'},
  { id:11, img :'/assets/newspaper/may/may1213.webp',link:'https://drive.google.com/file/d/18vVcqO6UJvVOgKdRJAAAV7YeQvo7nT1s/view?usp=sharing '},
  { id:12, img :'/assets/newspaper/may/may14.webp',link:' https://drive.google.com/file/d/1ZRlfm8GO2UDRhzFEirDBakzBkXTYo7ec/view?usp=sharing'},
  { id:13, img :'/assets/newspaper/may/may15.webp',link:'https://drive.google.com/file/d/1Rssya2n8svQwZZV6F4tJM61hY3rbzZyf/view?usp=sharing '},
  { id:14, img :'/assets/newspaper/may/may16.webp',link:'https://drive.google.com/file/d/1fGwt_762Zwu2VbA5MY-2tcrRuaJXFX8g/view?usp=sharing  '},
  { id:15, img :'/assets/newspaper/may/may17.webp',link:' https://drive.google.com/file/d/1kigbTDn0J1SKn55SlDlKCa-_QtxczN_Q/view?usp=sharing '},
  { id:16, img :'/assets/newspaper/may/may18.webp',link:'https://drive.google.com/file/d/1RnY02aH2odjSG6J6sr8H-B5QZDmAxQxo/view?usp=sharing  '},
  { id:17, img :'/assets/newspaper/may/may1920.webp',link:'https://drive.google.com/file/d/1SJqxXDBzS8ja-S1-4ZUgUJaZb-Q-QzKU/view?usp=sharing  '},
  { id:18, img :'/assets/newspaper/may/may21.webp',link:'https://drive.google.com/file/d/1yQoqNYGXrqIhFSbKmHiZnS1zEfTpPkdf/view?usp=sharing  '},
  { id:20, img :'/assets/newspaper/may/may22.webp',link:'https://drive.google.com/file/d/1uZwx9T1zFpfHhl4b7wj0txz2-JLmPM98/view?usp=sharing  '},
  { id:21, img :'/assets/newspaper/may/may23.webp',link:' https://drive.google.com/file/d/1vid5SwA9oovcnvcirv_g2_3x68t5SUF9/view?usp=sharing '},
  { id:22, img :'/assets/newspaper/may/may24.webp',link:'https://drive.google.com/file/d/1bSW7YIGiASETeGkVqfSSKidp-Wvd63gS/view?usp=sharing  '},
  { id:23, img :'/assets/newspaper/may/may25.webp',link:'https://drive.google.com/file/d/1-UgOpKwOpi2Wx9Ha6AccQAOq8ltZYdIH/view?usp=sharing  '},
  { id:24, img :'/assets/newspaper/may/may2627.webp',link:'https://drive.google.com/file/d/1mEbH8zaLy_65S4V8yf1xuzZdAbzWVNNx/view?usp=sharing'},
  { id:25, img :'/assets/newspaper/may/may28.webp',link:'https://drive.google.com/file/d/1P9CPTscwTJUYwtRfU0SYRmOAf7aAEUUz/view?usp=sharing'},
  { id:26, img :'/assets/newspaper/may/may29.webp',link:'https://drive.google.com/file/d/1GmOUCriKE5S7-q4K0CQu_uOjGuRCiCHF/view?usp=sharing'},
  { id:27, img :'/assets/newspaper/may/may30.webp',link:'https://drive.google.com/file/d/1NhUhUQc9Vxa3mJy3Im2DCt1wrhWkdsKU/view?usp=sharing'},
  { id:28, img :'/assets/newspaper/may/may31.webp',link:'https://drive.google.com/file/d/1HeSy-wFU85gOoB_upQO6OJCxjZgefkoR/view?usp=sharing'}

];

const juneData=[
  { id: 1, img:'/assets/newspaper/june/ncertjuly1.jpg',link:'https://drive.google.com/file/d/1XWO94_qdjcc_H9-yUg9IfyAM7Lar0-bb/view?usp=sharing' },
  { id: 2, img:'/assets/newspaper/june/ncertjuly2.jpg',link:'https://drive.google.com/file/d/1C8WsX-7dd06Iw6wJTNQ8_t56uAW28pu7/view?usp=sharing' },
  { id: 3, img:'/assets/newspaper/june/ncertjuly3.jpg',link:'https://drive.google.com/file/d/1OnlDxKqlEYJ6d064AZiOeomC2Gv2LrLY/view?usp=sharing' },
  { id: 4, img:'/assets/newspaper/june/ncertjuly4.jpg',link:'https://drive.google.com/file/d/1pwZWId3A9vLsyhpYCdtEfQ9UWbXWPwKQ/view?usp=sharing' },
  { id: 5, img:'/assets/newspaper/june/ncertjuly5.jpg',link:'https://drive.google.com/file/d/1bRu1eU54qAQhrhdjlAy8JS0EqAElu3rD/view?usp=sharing' },
  { id: 6, img:'/assets/newspaper/june/ncertjuly6.jpg',link:'https://drive.google.com/file/d/1SnFSWZ8AURulkd_ClX_HOnjuZ93ATuV9/view?usp=sharing' },
  { id: 7, img:'/assets/newspaper/june/ncertjuly7.jpg',link:'https://drive.google.com/file/d/1D2x7jx1ZXJ2F_DYjlYzc8bB6Ksw_w4zF/view?usp=sharing' },
  { id: 8, img:'/assets/newspaper/june/ncertjuly8.jpg',link:'https://drive.google.com/file/d/1zZx7m2f5kQmYal3rsuFXT5iquKzMTeXx/view?usp=sharing' },
  { id: 9, img:'/assets/newspaper/june/ncertjuly9.jpg',link:'https://drive.google.com/file/d/1T1WT2ycU6IfIEYL4gG7ofkIDIqK43BYk/view?usp=sharing' },
  { id: 10, img:'/assets/newspaper/june/ncertjuly10.jpg',link:'https://drive.google.com/file/d/1pietDGYO1tfphsbugeyf4c_AZFxLxv_3/view?usp=sharing' },
  { id: 11, img:'/assets/newspaper/june/ncertjuly11.jpg',link:'https://drive.google.com/file/d/1MJ5VMZb-lsMha3gFsQNvNtkhmgzLzGr3/view?usp=sharing' },
  { id: 12, img:'/assets/newspaper/june/ncertjuly12.jpg',link:'https://drive.google.com/file/d/1f_dwi22Ci1a_gz33g01vaLgdQeGZ4bcd/view?usp=sharing' },
  { id: 13, img:'/assets/newspaper/june/ncertjuly13.jpg',link:'https://drive.google.com/file/d/1bYy1Yjk5B-ChkbNtWgdQ4ZhrBXe5kgAb/view?usp=sharing' },
  { id: 14, img:'/assets/newspaper/june/ncertjuly14.jpg',link:'https://drive.google.com/file/d/1bYy1Yjk5B-ChkbNtWgdQ4ZhrBXe5kgAb/view?usp=sharing' },
  { id: 15, img:'/assets/newspaper/june/ncertjuly15.jpg',link:'https://drive.google.com/file/d/1uVg51b0TH7cC0T55QREhJf8ZaA7CZp8m/view?usp=sharing' },
  { id: 16, img:'/assets/newspaper/june/ncertjuly16.jpg',link:'https://drive.google.com/file/d/12f12065BmIwg3DzvnthwZFCAMDfarG2d/view?usp=sharing' },
  { id: 17, img:'/assets/newspaper/june/ncertjuly17.jpg',link:'https://drive.google.com/file/d/194h-0zAUvqyTJcKY-iKIddbV70wZ3UvE/view?usp=sharing' },
  { id: 18, img:'/assets/newspaper/june/june21.webp',link:'https://drive.google.com/file/d/1FVYYqJOCWmpd3w3zE-xVE3zvkd2qMttX/view?usp=sharing' },
  { id: 19, img:'/assets/newspaper/june/june22.webp',link:'https://drive.google.com/file/d/16PlYq_4gPlocdhr8B1BmGb06qDmwpdc6/view?usp=sharing' },
  { id: 20, img:'/assets/newspaper/june/june23.webp',link:'https://drive.google.com/file/d/1sf3ARe8Zb6Ed1aoObNOe1o27H3DEJj-3/view?usp=sharing' },
  { id: 21, img:'/assets/newspaper/june/june24.webp',link:'https://drive.google.com/file/d/1VupWtO-jmATHuKspVP1uOsKv_YFYwHlX/view?usp=sharing' },
  { id: 22, img:'/assets/newspaper/june/june25.webp',link:'https://drive.google.com/file/d/1ok1R6emRHOb6nbtUjgCF-ZojUx9n1k22/view?usp=sharing' },
  { id: 23, img:'/assets/newspaper/june/june26.webp',link:'https://drive.google.com/file/d/16UZWHm9SK2Z0adF4D8x3o64Sk4G2A2EE/view' },
  { id: 24, img:'/assets/newspaper/june/june27.webp',link:'https://drive.google.com/file/d/1wbYUle-7IiqZyzU_qRMls3PkPtRS-ZVW/view?usp=sharing' },
  { id: 25, img:'/assets/newspaper/june/june28.webp',link:'https://drive.google.com/file/d/1Bp1o117_sH87QbtPBoyc3bAMXYwnuGxp/view?usp=sharing' },
  { id: 26, img:'/assets/newspaper/june/june2930.webp',link:'https://drive.google.com/file/d/1nYLKI7LH0lrez10XFEaF5ln_AglEO8WC/view?usp=sharing' },

]

const julyData=[
  {id:1, img:'/assets/newspaper/july/july1.webp',link:"https://drive.google.com/file/d/1N4BbB7sd0iepIEg5cE2Zfs9q3YIFJhPF/view?usp=sharing"},
  {id:2, img:'/assets/newspaper/july/july2.webp',link:"https://drive.google.com/file/d/10988mlaQNPy41RSTPSgBEHT0zS-fpAXo/view?usp=sharing"},
  {id:3, img:'/assets/newspaper/july/july3.webp',link:"https://drive.google.com/file/d/1jmTd8Ul62jpSX1HRaw-zxrY582TMr4Js/view?usp=sharing"},
  {id:4, img:'/assets/newspaper/july/july4.webp',link:"https://drive.google.com/file/d/1_NiS3max9H_CL7e2YLliZLnXKt7-ZYs0/view?usp=sharing"},
  {id:5, img:'/assets/newspaper/july/july5.webp',link:"https://drive.google.com/file/d/1w9wyCKxYUEXIR0FN8272A1G3Jk19wTnv/view?usp=sharing"},
  {id:6, img:'/assets/newspaper/july/july6.webp',link:"https://drive.google.com/file/d/1O_lUSrAlveFvKRXxzmWubdqDl8mfj_Jq/view?usp=sharing"},
  {id:7, img:'/assets/newspaper/july/july7.webp',link:"https://drive.google.com/file/d/1OTn3-w6JWi3jhEhckkowRD33yFd5Cltu/view?usp=sharing"},
  {id:8, img:'/assets/newspaper/july/july8.webp',link:"https://drive.google.com/file/d/1FB0CmJOpsGfm78Y9885utNayIIbYklmp/view?usp=sharing"},
  {id:9, img:'/assets/newspaper/july/july9.webp',link:"https://drive.google.com/file/d/1i8BrioMBeS_GhBNVYHMxezjdG3tDypUk/view?usp=sharing"},
  {id:10, img:'/assets/newspaper/july/july10.webp',link:"https://drive.google.com/file/d/1u2s7SBBcDrKJVTtMXgQxxhsu-RvRooG9/view?usp=sharing"},
  {id:11, img:'/assets/newspaper/july/july11.webp',link:"https://drive.google.com/file/d/10I854-83vaJ4KgUjfL7SgFx_XNV879dS/view?usp=sharing"},
  {id:12, img:'/assets/newspaper/july/july12.webp',link:"https://drive.google.com/file/d/1P3GgxtyKW-TgZWQHEfZG89uav4tzb96g/view?usp=sharing"},
  {id:13, img:'/assets/newspaper/july/july13.webp',link:"https://drive.google.com/file/d/1nXJwvIQvsvknhEFJlsyt4GNV8ccljaZS/view?usp=sharing"},
  {id:14, img:'/assets/newspaper/july/july14.webp',link:"https://drive.google.com/file/d/1REc3LjyfLQ6pDnVU7lZXp17Tybrc_1fE/view?usp=sharing"},
  {id:15, img:'/assets/newspaper/july/july15.webp',link:"https://drive.google.com/file/d/1CA-zxzho1170oy-wzyPDNHHYoz4yT9PD/view?usp=sharing"},
  {id:16, img:'/assets/newspaper/july/july16.webp',link:"https://drive.google.com/file/d/11R9TNG-O8bXUfjMHbLy8YTFdnrLoO6FI/view?usp=sharing"},
  {id:17, img:'/assets/newspaper/july/july17.webp',link:"https://drive.google.com/file/d/1GtYqEPZub5tkxjs6HArCquZA7IMa914J/view?usp=sharing"},
  {id:18, img:'/assets/newspaper/july/july18.webp',link:"https://drive.google.com/file/d/1ea7sRt7FFcb4ipvcdMMfpvjGv9ke7ePA/view?usp=sharing"},
  {id:19, img:'/assets/newspaper/july/july19.webp',link:"https://drive.google.com/file/d/1wDdZk1j-U9xUcyzg_h8GItXXEywSP_as/view?usp=sharing"},
  {id:20, img:'/assets/newspaper/july/july20.webp',link:"https://drive.google.com/file/d/1Qv3I7n73bkV98ggHpYCHfmvjm7FXfJ0P/view?usp=sharing"},
  {id:21, img:'/assets/newspaper/july/july21.webp',link:"https://drive.google.com/file/d/135AVmgbys96k22IUr6akhlRF34EFo8b3/view?usp=sharing"},
  {id:22, img:'/assets/newspaper/july/july22.webp',link:"https://drive.google.com/file/d/1beI3x16LeUS1W50IQTuyTjqH_PrHCsef/view?usp=sharing"},
  {id:23, img:'/assets/newspaper/july/july23.webp',link:"https://drive.google.com/file/d/1fFTDL_t0ITPxVKjXwpaodLhhpNzbX_7d/view?usp=sharing"},
  {id:25, img:'/assets/newspaper/july/july25.webp',link:"https://drive.google.com/file/d/1qaxy-sLdBSXFwrdnXCPLIxDB8Ss39KZ1/view?usp=sharing"},
  {id:26, img:'/assets/newspaper/july/july26.webp',link:"https://drive.google.com/file/d/1YjnxL3m32_8k-fMk_FZi4T96DRzUvQqq/view?usp=sharing"},
  {id:27, img:'/assets/newspaper/july/july27.webp',link:"https://drive.google.com/file/d/12V5MGsZ923QpPfuosGn_G7rAt7b8-D4O/view?usp=sharing"},
  {id:28, img:'/assets/newspaper/july/july28.webp',link:"https://drive.google.com/file/d/19_M-U13CPnh11R9R4jbx1wR2l3hP57UU/view?usp=sharing"},
  {id:29, img:'/assets/newspaper/july/july29.webp',link:"https://drive.google.com/file/d/1M9oABa8DVSwB7IFzpl-Oo2uYexo5y2hs/view"},
  {id:30, img:'/assets/newspaper/july/july30.webp',link:"https://drive.google.com/file/d/15Xk3IbMiK2RZzOZK1GQIVXkeuPdFdrI2/view"},
  {id:31, img:'/assets/newspaper/july/july31.webp',link:"https://drive.google.com/file/d/19GfG1RqkJOHm6eqE0JDKylJvrpW1jQ91/view?usp=sharing"},

]

const augData=[
  {id:1,img:'/assets/newspaper/aug/aug1.webp',link:'https://drive.google.com/file/d/17nw8wTeTor4VEczoNmWmzswWvYp1Ct9F/view?usp=sharing'},
  {id:2,img:'/assets/newspaper/aug/aug2.webp',link:'https://drive.google.com/file/d/1avMjetYWoOulGcbL4-X_5L4wGgKkl0uX/view?usp=sharing'},
  {id:3,img:'/assets/newspaper/aug/aug3.webp',link:'https://drive.google.com/file/d/11IYeBvDYQ4KTFNXYA-48ZnhZ5fzKOTER/view?usp=sharing'},
  {id:4,img:'/assets/newspaper/aug/aug4.webp',link:'https://drive.google.com/file/d/1PfCqV-8out848OaHT7nhki3Um-qzQuXc/view?usp=sharing'},
  {id:5,img:'/assets/newspaper/aug/aug5.webp',link:'https://drive.google.com/file/d/1TSVL2QvwfaF76J0wOfixkUAN2aVR6fE6/view?usp=sharing'},
  {id:6,img:'/assets/newspaper/aug/aug6.webp',link:'https://drive.google.com/file/d/1vDBz5x61A9QTs1HeEF7B_s6PMDBa-GuP/view?usp=sharing'},
  {id:7,img:'/assets/newspaper/aug/aug7.jpg',link:'https://drive.google.com/file/d/1kICOqB9OLFS2VeK64Z6jcc6PBJZdnb2F/view?usp=sharing'},
  {id:8,img:'/assets/newspaper/aug/aug8.jpg',link:'https://drive.google.com/file/d/11VAxB159cz9tMA2hy2C8qhSC9bgzqV1e/view?usp=sharing'},
  {id:9,img:'/assets/newspaper/aug/aug9.jpg',link:'https://drive.google.com/file/d/1FVIyMSYdmUGmGEWlVNQi2w68jkGyjMp7/view?usp=sharing'},
  {id:10,img:'/assets/newspaper/aug/aug10.jpg',link:'https://drive.google.com/file/d/1juN_vAVUz_tYfIkVY2aL7GLUTXwzZiuv/view?usp=sharing'},
  {id:11,img:'/assets/newspaper/aug/aug11.jpg',link:'https://drive.google.com/file/d/16SJnk358sb0oEGZC6iiIFCaRyoS6RWM6/view?usp=sharing'},
  {id:12,img:'/assets/newspaper/aug/aug12.jpg',link:'https://drive.google.com/file/d/1JDbFVJ0zGYGmFhFmyyPFM9o85vyPdtTN/view?usp=sharing'},
  {id:13,img:'/assets/newspaper/aug/aug13.jpg',link:'https://drive.google.com/file/d/167bWJJHyyNAKqjrcZKq72YPmBJWY8Ra0/view?usp=sharing'},
  {id:14,img:'/assets/newspaper/aug/aug14.jpg',link:'https://drive.google.com/file/d/1cc4MAc2gF--OGTUuv_GAyzU88PHpHISU/view?usp=sharing'},
  {id:15,img:'/assets/newspaper/aug/aug15.jpg',link:'https://drive.google.com/file/d/1_eKOr7Ec0giABbv2bVdM-w2BAtG5GzB1/view?usp=sharing'},
  {id:16,img:'/assets/newspaper/aug/aug16.jpg',link:'https://drive.google.com/file/d/1FnntjPY1HtqZDR0le59TzU8WHM1GiZO2/view?usp=sharing'},
  {id:17,img:'/assets/newspaper/aug/aug17.jpg',link:'https://drive.google.com/file/d/1id7Rt5yaYGKTRtzsBqqk-k6iz9bQW4bh/view?usp=sharing'},
  {id:18,img:'/assets/newspaper/aug/aug18.jpg',link:'https://drive.google.com/file/d/1QgwuKZk8_T5ZqSX6r9sXSOQZA9bK6-vU/view?usp=sharing'},
  {id:19,img:'/assets/newspaper/aug/aug19.jpg',link:'https://drive.google.com/file/d/1dI0TG3ElHYzrjxpshEm-m1L8B2-0FGsA/view?usp=sharing'},
  {id:20,img:'/assets/newspaper/aug/aug20.jpg',link:'https://drive.google.com/file/d/1hu8B_VA8I-3RdIhtJnlZpk6cdCDL5zEb/view?usp=sharing'},
  {id:21,img:'/assets/newspaper/aug/aug21.jpg',link:'https://drive.google.com/file/d/1k7ojzBwtMkNomDwqnuu2jV6XO2X1f8xz/view?usp=sharing'},
  {id:22,img:'/assets/newspaper/aug/aug22.jpg',link:'https://drive.google.com/file/d/1vxg8MkFJGD-tcwj4PBouXD6RKCycy1_i/view?usp=sharing'},
  {id:23,img:'/assets/newspaper/aug/aug23.jpg',link:'https://drive.google.com/file/d/1SyoOQo7CXAI5PQ88v3oa4Nn22itL2NKt/view?usp=sharing'},
  {id:24,img:'/assets/newspaper/aug/aug24.jpg',link:'https://drive.google.com/file/d/1hPtoW9UERsEfg2tpG8cpi84gWkhT8YOJ/view?usp=sharing '},
  {id:25,img:'/assets/newspaper/aug/aug25.jpg',link:'https://drive.google.com/file/d/18-08jktRgcY0xpiVwHczd4essE5aRKHm/view?usp=sharing'},
  {id:26,img:'/assets/newspaper/aug/aug26.jpg',link:'https://drive.google.com/file/d/15yy3jb8fp-QyqZ3MCAiMD42KF_yGlRQ6/view?usp=sharing'},
  {id:27,img:'/assets/newspaper/aug/aug27.jpg',link:'https://drive.google.com/file/d/1uANB3LKxXICFX5I2yvRmS4bblFvM7HDR/view?usp=sharing'},
  {id:28,img:'/assets/newspaper/aug/aug28.jpg',link:'https://drive.google.com/file/d/1AztTDLVyTLJDYgA8RN26wMPgpRzdPr3d/view?usp=sharing'},
  {id:29,img:'/assets/newspaper/aug/aug29.jpg',link:'https://drive.google.com/file/d/1K0HfvUzHSqCX3o6miRVTJ9StrgZiikjd/view?usp=sharing'},
  {id:30,img:'/assets/newspaper/aug/aug30.jpg',link:'https://drive.google.com/file/d/1l22-8bF1G1oQjwLLg3NZ2NY2YllzFelK/view?usp=sharing'},
  {id:31,img:'/assets/newspaper/aug/aug31.jpg',link:'https://drive.google.com/file/d/1nKYcCyXmFsDx-q80oHHAuALafGGIlsm-/view?usp=sharing'}

]

const sepData=[
  {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:'https://drive.google.com/file/d/1djkcO6qoJJkJ3tQ_fsKVVg5bj6lrvy7K/view?usp=sharing'},
  {id:2,img:'/assets/newspaper/sep/2sep.jpg',link:'https://drive.google.com/file/d/1aC3l_puwGbgj06xRb2swIG1ucqFre9qt/view?usp=sharing'},
  {id:3,img:'/assets/newspaper/sep/3sep.jpg',link:'https://drive.google.com/file/d/1K5U1Wqu0PrDYnKRDsay29dfYq0VszjJR/view?usp=sharing'},
  {id:4,img:'/assets/newspaper/sep/4sep.jpg',link:'https://drive.google.com/file/d/1zcayJ_RAg-VJYzmxzGFBdd24MxD34AWI/view?usp=sharing'},
  {id:5,img:'/assets/newspaper/sep/5sep.png',link:'https://drive.google.com/file/d/1fXJpjhQWf6vYulT7n4QTDzaSgk6MAJ81/view?usp=sharing'},
  {id:6,img:'/assets/newspaper/sep/6sep.jpg',link:'https://drive.google.com/file/d/1RCyVrA6LgiuCtSmFES7vpChk_GOMJ7VB/view?usp=sharing'},
  {id:7,img:'/assets/newspaper/sep/7sep.jpg',link:'https://drive.google.com/file/d/1scC3LLECRJsn-uXmqy9Fxho5heEj7RP7/view?usp=sharing'},
  {id:8,img:'/assets/newspaper/sep/8.png',link:'https://drive.google.com/file/d/1gbyRgw4dNW-rFUGhgHrhkRS__kG3VB4e/view?usp=sharing'},
  {id:9,img:'/assets/newspaper/sep/10.png',link:'https://drive.google.com/file/d/1SpaHoHAK4v5FmLTlVecP6GwqPmXOT30Y/view?usp=sharing'},
  {id:10,img:'/assets/newspaper/sep/11sep.jpg',link:'https://drive.google.com/file/d/10VMZJyUnd_-Yu_UP2ELR4ZG96TX-o9hK/view?usp=sharing'},
  {id:11,img:'/assets/newspaper/sep/12sep.jpg',link:'https://drive.google.com/file/d/1Nl8eDEzWcTKCvKZZzSV2YViXiZuAaTR6/view?usp=sharing'},
  {id:12,img:'/assets/newspaper/sep/13sep.jpg',link:'https://drive.google.com/file/d/1BfNaNiVLWOjXGSajHw5wCTsx4kX5qTr7/view?usp=sharing'},
  {id:13,img:'/assets/newspaper/sep/14sep.jpg',link:'https://drive.google.com/file/d/1rN9MDubl_14apUL-xzPdh6JpDce5LM37/view?usp=sharing'},
  {id:14,img:'/assets/newspaper/sep/15sep.jpg',link:'https://drive.google.com/file/d/18gylRvpie-3sps1ErqQlt5q_s_yaxw9P/view?usp=sharing'},
  {id:15,img:'/assets/newspaper/sep/16sep.jpg',link:'https://drive.google.com/file/d/1NiSEu9-20FdKlr6zFsibPaHnKFZlLa02/view?usp=sharing'},
  {id:16,img:'/assets/newspaper/sep/17sep.jpg',link:'https://drive.google.com/file/d/12Duz4hVRQ72xa7C1LxNmHtWddMPlQY-R/view?usp=sharing'},
  {id:16,img:'/assets/newspaper/sep/18sep.jpg',link:'https://drive.google.com/file/d/1mgWUkqSvfSjgA8hxNQ_ZxFrIeUwVOIRn/view?usp=sharing'},
  {id:16,img:'/assets/newspaper/sep/19sep.jpg',link:'https://drive.google.com/file/d/1IewxlWWxtEg_aufv7Nc7kxLt_7SJWjR4/view?usp=sharing'},
  {id:17,img:'/assets/newspaper/sep/20sep.jpg',link:'https://drive.google.com/file/d/1Sy7oH3vwVMfG-GD68F1T2XCIR5qfLlfD/view?usp=sharing'},
  {id:18,img:'/assets/newspaper/sep/21sep.jpg',link:'https://drive.google.com/file/d/1hDiPcEWqFFsfVNDqKkQKh4TezeRt1PEj/view?usp=sharing'},
  {id:19,img:'/assets/newspaper/sep/22sep.jpg',link:'https://drive.google.com/file/d/1NtqMlyXS_KYOkbpjgsf5d0g-w2jEwsRW/view?usp=sharing'},
  {id:20,img:'/assets/newspaper/sep/23sep.jpeg',link:'https://drive.google.com/file/d/1rDN3kjKyHav20EaoUbQM1Y_7CcuNXXQv/view?usp=sharing'},
  {id:21,img:'/assets/newspaper/sep/24sep.jpeg',link:'https://drive.google.com/file/d/1cvnQtH_ue2FvOAsT85rRUJYuNrfmyBA8/view?usp=sharing'},
  {id:22,img:'/assets/newspaper/sep/25sep.jpeg',link:'https://drive.google.com/file/d/1LOcqfQjMlFaoii45jQ_TzI0O2FQE3_UP/view?usp=sharing'},
  {id:23,img:'/assets/newspaper/sep/26sep.jpeg',link:'https://drive.google.com/file/d/1zuKWltYNLbc5qlR82DcBUfSmX_n4m4fi/view?usp=sharing'},
  {id:24,img:'/assets/newspaper/sep/27sep.jpeg',link:'https://drive.google.com/file/d/1628mHqrFfiYGgJmfN2B1TW6Ltq-u1LRv/view?usp=sharing'},
  {id:24,img:'/assets/newspaper/sep/28sep.jpg',link:'https://drive.google.com/file/d/103dbDtVVLBYEd0SJm2ODbgLkTA4UaUCb/view?usp=sharing'},
  {id:25,img:'/assets/newspaper/sep/30sep.jpg',link:'https://drive.google.com/file/d/1Udnk-9uYkb6qEBBwq4vIyfFzoPvj9gvS/view?usp=sharing'},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
  // {id:1,img:'/assets/newspaper/sep/1sep.jpg',link:''},
]

const octData = [
  {id:1,img:'/assets/newspaper/oct/1oct.jpg',link:'https://drive.google.com/file/d/1hfM4a1lSQUWhhQlMv5j0iJUdcU18hHoc/view?usp=sharing '},
  {id:2,img:'/assets/newspaper/oct/2oct.jpg',link:'https://drive.google.com/file/d/1edVN4FjWX9z9X-8XJzPXMidX32q4JCYB/view?usp=sharing'},
  {id:3,img:'/assets/newspaper/oct/3oct.jpeg',link:'https://drive.google.com/file/d/1H1k0iIbCl1aSou_W5pZ4QhJUzVBpG65U/view?usp=sharing'},
  {id:4,img:'/assets/newspaper/oct/4oct.jpeg',link:'https://drive.google.com/file/d/1_g40cbYScIqamWheNC1OmOItLvqbIkSN/view?usp=sharing '},
  {id:5,img:'/assets/newspaper/oct/5oct.jpg',link:'https://drive.google.com/file/d/1ovhAo76cc9WlsexVWMMB40NFV8VSax0-/view?usp=sharing'},
  {id:6,img:'/assets/newspaper/oct/6oct.jpg',link:'https://drive.google.com/file/d/1KFbQGR7YpJLLbfaJNXltYi0J01RfQ1iB/view?usp=sharing'},
  {id:7,img:'/assets/newspaper/oct/7oct.jpg',link:'https://drive.google.com/file/d/1UmoUof6O06YXTT5ZtKWNhjAq7KdO6ND_/view?usp=sharing'},
  {id:8,img:'/assets/newspaper/oct/8oct.jpeg',link:'https://drive.google.com/file/d/16py2HYxk6b7ESZY4GP4g2FqTpibvTPqj/view?usp=sharing'},
  {id:9,img:'/assets/newspaper/oct/9oct.jpeg',link:'https://drive.google.com/file/d/19DMjj9v6CN-0g51tweEKnFrbKDgzwCmX/view?usp=sharing'},
  {id:10,img:'/assets/newspaper/oct/10oct.jpeg',link:'https://drive.google.com/file/d/1XpTIVQxATtjKxBxTxWt52jMDBm362ZUv/view?usp=sharing'},
  {id:11,img:'/assets/newspaper/oct/11oct.jpeg',link:'https://drive.google.com/file/d/1thDHhB2r3oKCjXr8AJy2ftI7hCs7A_RN/view?usp=sharing'},
  {id:13,img:'/assets/newspaper/oct/13oct.jpeg',link:'https://drive.google.com/file/d/1nc7SVS3ZzRzEJrTXWeOzGf_C1dW76Xwm/view?usp=sharing'},
  {id:14,img:'/assets/newspaper/oct/14oct.jpeg',link:'https://drive.google.com/file/d/1KMy_TSUF4u-7cIyNkDtHOv08LGs3s-Os/view?usp=sharing'},
  {id:15,img:'/assets/newspaper/oct/15oct.jpg',link:'https://drive.google.com/file/d/1BPck1ssH1lIBLvAmvXVekarcLqX76ARB/view?usp=sharing'},
  {id:16,img:'/assets/newspaper/oct/16oct.jpg',link:'https://drive.google.com/file/d/1LwCKI2Bf92wkdCJvLyaGaE3uRrRTuK_a/view?usp=sharing'},
  {id:17,img:'/assets/newspaper/oct/17oct.jpeg',link:'https://drive.google.com/file/d/1XqQz_Ta4JyBTCU8ecXyq6bTcNq5Ca1p5/view?usp=sharing'},
  {id:18,img:'/assets/newspaper/oct/18oct.jpeg',link:'https://drive.google.com/file/d/1t6837NWHo7hhv5LDHy0g1DpRXz9QbvrP/view?usp=sharing'},
  {id:19,img:'/assets/newspaper/oct/19oct.jpg',link:'https://drive.google.com/file/d/1PQKM9084nbQ6sHaRf53DsGXQaAW2OmIv/view?usp=sharing'},
  {id:20,img:'/assets/newspaper/oct/20oct.jpg',link:'https://drive.google.com/file/d/1wL_pxumYMPPlB3lVTbbfoj4QPZptzFXL/view?usp=sharing'},
  {id:21,img:'/assets/newspaper/oct/21oct.jpg',link:'https://drive.google.com/file/d/1enG-E2qfMVsFkGwcs9qoBNjyFhrPRF7d/view?usp=sharing'},
  {id:22,img:'/assets/newspaper/oct/22oct.jpg',link:'https://drive.google.com/file/d/1BHIRcTExeQVh85NN8RPCnt6KOWxb6wge/view?usp=sharing'},
  {id:23,img:'/assets/newspaper/oct/23oct.jpg',link:'https://drive.google.com/file/d/150UVLX6dkSSc-NWfcQOkAVeRFIZB8Kkz/view?usp=sharing'},
  {id:24,img:'/assets/newspaper/oct/24oct.jpg',link:'https://drive.google.com/file/d/1uTaKtG7TbpyadL1iAwASSDSKw_TRPbLz/view?usp=sharing'},
  {id:25,img:'/assets/newspaper/oct/25oct.jpg',link:'https://drive.google.com/file/d/1buSWuoHf8i9XV9NcJwM51FMOczJ1oYxj/view?usp=sharing'},
  {id:26,img:'/assets/newspaper/oct/26oct.jpg',link:'https://drive.google.com/file/d/19_mVMTp-76WdwR2FpW1DBTCsV0J4vBQU/view?usp=sharing'},
  {id:27,img:'/assets/newspaper/oct/27oct.jpg',link:'https://drive.google.com/file/d/1zZG1UrVhO73HEq_85ieVceCanY7yHO--/view?usp=sharing'},
  {id:27,img:'/assets/newspaper/oct/28oct.jpg',link:'https://drive.google.com/file/d/1VO1XnYUjj85D4ah6m7QRLAG8h2Ox3d66/view?usp=sharing'},
  {id:29,img:'/assets/newspaper/oct/29oct.jpeg',link:'https://drive.google.com/file/d/1xlZ4i_8CquuxjCj0lqO0LzHqJsZ8qUoP/view?usp=sharing'},
  {id:30,img:'/assets/newspaper/oct/30oct.jpg',link:'https://drive.google.com/file/d/1UvF2nkQRyDzjScXeUxgKg-Qq_ZC5FCm1/view?usp=sharing'},
  {id:31,img:'/assets/newspaper/oct/31oct.jpg',link:'https://drive.google.com/file/d/1f9sM2PMC6Bas5EB24Mf1bqaNO0lyKER_/view?usp=sharing'},
  // {id:27,img:'/assets/newspaper/oct/27oct.jpg',link:''},


]


const novData=[
  {id:1,img:'/assets/newspaper/nov/1nov.webp',link:"https://drive.google.com/file/d/1k5FNH8Ll_Hv-E9-5HPlpUF8Mnzud6lkm/view?usp=sharing"},
  // {id:2,img:'/assets/newspaper/nov/2nov.webp',link:""},
  {id:3,img:'/assets/newspaper/nov/3nov.webp',link:"https://drive.google.com/file/d/1B66gCCAm-VnRmIgXX-nrPtAwSCeXa8Pm/view?usp=sharing"},
  {id:4,img:'/assets/newspaper/nov/4nov.webp',link:"https://drive.google.com/file/d/1YOTZ5lqAdp3hH61kNSUfVTuVyFYZ5U3K/view?usp=sharing"},
  {id:5,img:'/assets/newspaper/nov/5nov.jpeg',link:"https://drive.google.com/file/d/1kLX6zCAOjlPf1IFAnOL82LND2LuD5W6z/view?usp=sharing"} ,
  {id:6,img:'/assets/newspaper/nov/6nov.jpeg',link:"https://drive.google.com/file/d/1zzKXoiznjezKsMQMbNSSAEQna87H0VZp/view?usp=sharing"} ,
  {id:7,img:'/assets/newspaper/nov/7nov.jpeg',link:"https://drive.google.com/file/d/143tZlBCd7kEP2-_fUYDtamL7yLVz3Dzr/view?usp=sharing"} ,
  {id:8,img:'/assets/newspaper/nov/8nov.jpeg',link:"https://drive.google.com/file/d/1yZ7yreY3fedExqfeDutwXVB-HvuVpPaT/view?usp=sharing"} ,
  {id:9,img:'/assets/newspaper/nov/9nov.png',link:"https://drive.google.com/file/d/1IZ172ytOrzq1ABWGwANav238Q8VOgpow/view?usp=sharing"},
  {id:9,img:'/assets/newspaper/nov/10nov.jpeg',link:"https://drive.google.com/file/d/14bApsDoR8Zrr63PcQzeXBQgQQnjlFFkb/view?usp=sharing"},
  {id:10,img:'/assets/newspaper/nov/11nov.jpeg',link:"https://drive.google.com/file/d/1UlU7VtG4mA9ooOPO_W_GkJ_zLnKsCk8f/view?usp=sharing"},
  {id:11,img:'/assets/newspaper/nov/12nov.jpeg',link:"https://drive.google.com/file/d/1atVzQzA5n4-lfZG5xd8vA9Lb24b2sY3X/view?usp=sharing"},
  {id:12,img:'/assets/newspaper/nov/13nov.jpeg',link:"https://drive.google.com/file/d/1u0ob_xcias_oATe3w_pWgypdPRaLAgyV/view?usp=sharing"},
  {id:13,img:'/assets/newspaper/nov/14nov.jpeg',link:"https://drive.google.com/file/d/1CkMJ3FYxzjNwXK9DacHlsslM4GaEuv_U/view?usp=sharing"},
  {id:14,img:'/assets/newspaper/nov/15nov.jpeg',link:"https://drive.google.com/file/d/1jERrxDLh8oPw2KMVv5wycztycXpChUM7/view?usp=sharing"},
  {id:15,img:'/assets/newspaper/nov/16nov.png',link:"https://drive.google.com/file/d/1hw4wBVVJj_XEy7SURwAYO-TvQqVXoCGa/view?usp=sharing"},
  {id:16,img:'/assets/newspaper/nov/17nov.png',link:"https://drive.google.com/file/d/1oRoEDDpWr7HikqfP8V_Te2i6BkUIKjJ-/view?usp=sharing"},
  {id:17,img:'/assets/newspaper/nov/18nov.png',link:"https://drive.google.com/file/d/1bxTQ-Ss4wH4fFed0BLpbF4c6Dc20rXWf/view?usp=sharing"},
  {id:18,img:'/assets/newspaper/nov/19nov.png',link:"https://drive.google.com/file/d/1nFCZ8KI1mDWrwyWkWTr-iYs2RYsleRGy/view?usp=sharing"},
  // {id:19,img:'/assets/newspaper/nov/20nov.png',link:""},
  // {id:20,img:'/assets/newspaper/nov/21nov.png',link:""},
  // {id:21,img:'/assets/newspaper/nov/22nov.png',link:""},
  // {id:22,img:'/assets/newspaper/nov/23nov.png',link:""},
  // {id:23,img:'/assets/newspaper/nov/24nov.png',link:""},
  // {id:24,img:'/assets/newspaper/nov/25nov.png',link:""},
  // {id:25,img:'/assets/newspaper/nov/26nov.png',link:""},
  // {id:26,img:'/assets/newspaper/nov/27nov.png',link:""},
  // {id:27,img:'/assets/newspaper/nov/28nov.png',link:""},
  // {id:28,img:'/assets/newspaper/nov/29nov.png',link:""},
  // {id:29,img:'/assets/newspaper/nov/30nov.png',link:""},

]

const tabData = [
  { id: 0, label: "APRIL 2024" },
  {id:1,label:"MAY 2024"},
  {id:2,label:"JUNE 2024"},
  {id:3,label:"JULY 2024"},
  {id:4,label:"AUGUST 2024"},
  {id:5,label:"SEPTEMBER 2024"},
  {id:6,label:"OCTOBER 2024"},
  {id:7,label:"NOVEMBER 2024"}
];


const Optional = () => {
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
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  
  const renderGridItems = (data) => (
    <Grid container>
      {data.map(item => (
        <Grid key={item.id} item xs={12} sm={6} md={6} lg={4} sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
       
          <Paper sx={{ width: 250, height: 140, display: 'flex', flexDirection: 'column', margin: '5px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img  style={{ width: '100%', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`}/>
            </a>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box>
    <Box  className="material-page" sx={{ width: '100%', marginTop: isMobileView ? "100px" : "110px", position: 'relative', height: '150px', backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)" }}>
      <Typography variant="h4"  sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', fontSize: isMobileView ? "20px" : "50px" }}>
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
        <Box sx={{  bgcolor: 'background.paper',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example" sx={{ width: '100%' }}>
            {tabData.map(tab => (
              <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} sx={{ bgcolor: value === tab.id ? 'lightblue' : 'white', color: 'black', marginRight: '10px', marginBottom: '10px', marginLeft: '10px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', maxWidth: '300px' }} />
            ))}
          </Tabs>
        </Box>
      )}
      <Box sx={{ width: '100%' , display:'flex',flexDirection:'column'}}>
      {tabData.map((tab, index) => (
        <TabPanel key={tab.id} value={value} index={index} sx={{ marginLeft: isMobileView ? '' : '20px', marginRight: isMobileView ? '' : '20px', marginTop: isMobileView ? '10px' : '' }}>
          {value === 0 && renderGridItems(tabpanel)}
          {value === 1 && renderGridItems(maydata)}
          {value===2 && renderGridItems(juneData)} 
          {value===3 && renderGridItems(julyData)} 
          {value===4 && renderGridItems(augData)} 
          {value===5 && renderGridItems(sepData)} 
          {value===6 && renderGridItems(octData)} 
          {value===7 && renderGridItems(novData)}
        </TabPanel>
      ))}
      </Box>
    
    </Box>
  </Box>
  )
}

export default Optional

