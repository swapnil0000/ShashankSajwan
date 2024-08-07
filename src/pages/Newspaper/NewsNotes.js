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





]


const tabData = [
  { id: 0, label: "APRIL 2024" },
  {id:1,label:"MAY 2024"},
  {id:2,label:"JUNE 2024"},
  {id:3,label:"JULY 2024"},
  {id:4,label:"AUGUST 2024"}
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

        </TabPanel>
      ))}
      </Box>
    
    </Box>
  </Box>
  )
}

export default Optional

