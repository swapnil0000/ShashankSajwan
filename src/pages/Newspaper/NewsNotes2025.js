import { Box, Grid, Paper, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
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


const janData = [
  { id: 1, img: '/assets/newspaper/jan2025/1jan.jpg', link: 'https://drive.google.com/file/d/1C9QjTieislhE0EcO8r-l9Xl0qOJTMNKO/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/jan2025/2jan.jpg', link: 'https://drive.google.com/file/d/1yJu31ltAsIBTEY7hhastfqVYMD8wrw5V/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/jan2025/3jan.jpg', link: 'https://drive.google.com/file/d/1q-UJ6UNxXNLjah5H4hm-RWcVI9ppRKv9/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/jan2025/4jan.jpg', link: 'https://drive.google.com/file/d/1z-WivwMKGVYLdWPRM3dCK6UBvtgCJtQi/view?usp=sharing' },
  { id: 5, img: '/assets/newspaper/jan2025/5jan.jpg', link: 'https://drive.google.com/file/d/1VALWaAw2m7Afz0FN0qr1j5boz9WdhUyf/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/jan2025/6jan.jpg', link: 'https://drive.google.com/file/d/1ptlU3vVMxvxBpjZOFn_geI2JU6VL1TuV/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/jan2025/7jan.jpg', link: 'https://drive.google.com/file/d/1mY4oBUmirZpnAOw2hYS8YIlcWDVfvd21/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/jan2025/8jan.jpg', link: 'https://drive.google.com/file/d/16zu08uFurgQ2WSFtInskmrf9_J0KvO0R/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/jan2025/9jan.jpg', link: 'https://drive.google.com/file/d/1_HpoOr_Ns41nfBOXvCC5GRtxS-1Wt6KN/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/jan2025/10jan.jpg', link: 'https://drive.google.com/file/d/10bneF5HJiVtfrUOCTeX2PEo3s43DSwo_/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/jan2025/11jan.jpg', link: 'https://drive.google.com/file/d/1FmfCJsKjTtBREnk8fJhdHXWUGQ0X9eXT/view?usp=sharing' },
  { id: 12, img: '/assets/newspaper/jan2025/12jan.jpg', link: 'https://drive.google.com/file/d/1WEwiqlXTRGS6wFRfk14AI3SbM9Lpqn8s/view?usp=sharing' },
  { id: 13, img: '/assets/newspaper/jan2025/13jan.jpg', link: 'https://drive.google.com/file/d/16RXjzZvr4CtuPg8Y7jnIhpPTf1ku_WUA/view?usp=sharing' },
  { id: 14, img: '/assets/newspaper/jan2025/14jan.jpg', link: 'https://drive.google.com/file/d/1m9s93m6jgNsr-JnQI1vKb8SYu9GKxfUn/view?usp=sharing' },
  { id: 15, img: '/assets/newspaper/jan2025/16jan.jpg', link: 'https://drive.google.com/file/d/1J5uekMCsh9WTp6U7wwmh55JRkSJQMo4i/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/jan2025/17jan.jpg', link: 'https://drive.google.com/file/d/1TMfgLKXgylGdE0JpRe5Qs8iteZpChlYn/view?usp=sharing' },
  { id: 17, img: '/assets/newspaper/jan2025/18jan.jpg', link: 'https://drive.google.com/file/d/1GJ-D5lAxbu3UxN7-8hwsBAg9uvIp57dc/view?usp=sharing' },
  { id: 18, img: '/assets/newspaper/jan2025/19jan.jpg', link: 'https://drive.google.com/file/d/1PLF0anptJYNFBVyyQBZ4uPpg5Umxqe5y/view?usp=sharing' },
  { id: 19, img: '/assets/newspaper/jan2025/20jan.jpg', link: 'https://drive.google.com/file/d/139mRN0gTt11w2FxuoY9Rnt-AszAD3QYS/view?usp=sharing' },
  { id: 20, img: '/assets/newspaper/jan2025/21jan.jpg', link: 'https://drive.google.com/file/d/12jI-p_hElfJS2EyPK7SlTxd7aW02Yci2/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/jan2025/22jan.jpg', link: 'https://drive.google.com/file/d/1brJKbSkA52TySLMCzk8RknUgUKCM6jyi/view?usp=sharing' },
  { id: 22, img: '/assets/newspaper/jan2025/23jan.jpg', link: 'https://drive.google.com/file/d/1yx18YnlACYc-dvCI_bWUVpKWc5MNH70J/view?usp=sharing' },
  { id: 23, img: '/assets/newspaper/jan2025/24jan.jpg', link: 'https://drive.google.com/file/d/1XYU3b7V6EtLNqhpCWfzGfiE0IWL_tLVU/view?usp=sharing' },
  { id: 24, img: '/assets/newspaper/jan2025/25jan.jpg', link: 'https://drive.google.com/file/d/1XjVd5JhAd_kRINOMidx5MeCM5kMm5f7S/view?usp=sharing' },
  { id: 25, img: '/assets/newspaper/jan2025/26jan.jpg', link: 'https://drive.google.com/file/d/1vqjmuQDo1VdN7L91J9banwszF2makPjR/view?usp=sharing' },
  { id: 26, img: '/assets/newspaper/jan2025/27jan.jpg', link: 'https://drive.google.com/file/d/1MBcJohBSNSb45SLL-dVhAK3fIrPkXEzs/view?usp=sharing' },
  { id: 27, img: '/assets/newspaper/jan2025/28jan.jpg', link: 'https://drive.google.com/file/d/1zmPfkcHsczmv3v8Tw-yFw5rgurGcloL_/view?usp=sharing' },
  { id: 28, img: '/assets/newspaper/jan2025/29jan.jpg', link: 'https://drive.google.com/file/d/1aXs7UopruK1lKg7NqZp9kChtFrYoef82/view?usp=sharing' },
  { id: 29, img: '/assets/newspaper/jan2025/30jan.jpg', link: 'https://drive.google.com/file/d/1mI-THVQNQ1dwefEKa1p7bmy-vs8NqjCj/view?usp=sharing' },
  { id: 30, img: '/assets/newspaper/jan2025/31jan.jpg', link: 'https://drive.google.com/file/d/1IkotMU_5waD7yJF4Wb4eWTnV6te76nIt/view?usp=sharing' },

  //  {id:25,img:'/assets/newspaper/jan2025/17jan.jpg',link:''},

]

const febData = [
  { id: 1, img: '/assets/newspaper/feb2025/1feb.jpg', link: "https://drive.google.com/file/d/1cuskun_lua8iGxbGtCUo7CFalwiilQPp/view?usp=sharing" },
  { id: 2, img: '/assets/newspaper/feb2025/2feb.jpg', link: "https://drive.google.com/file/d/1lysjDZ2fwFlkk_wOZCvdOiv6S00-fzeV/view?usp=sharing" },
  { id: 3, img: '/assets/newspaper/feb2025/3feb.jpg', link: "https://drive.google.com/file/d/1v5kiHblIVPvOIdFI3Oty8X9XwiQ0FK-K/view?usp=sharing" },
  { id: 4, img: '/assets/newspaper/feb2025/4feb.jpg', link: "https://drive.google.com/file/d/1MYsEnS6RUHw8LNvWBfIXU_VTuslX7NGB/view?usp=sharing" },
  { id: 5, img: '/assets/newspaper/feb2025/5feb.jpg', link: "https://drive.google.com/file/d/1p5UV7M9DiO8VJNVd7Ka_QLEpHHKKQKxU/view?usp=sharing" },
  { id: 6, img: '/assets/newspaper/feb2025/6feb.jpeg', link: "https://drive.google.com/file/d/1tzHcsiQHdl7Kk4ylritQWUkrQUX0mW67/view?usp=sharing" },
  { id: 7, img: '/assets/newspaper/feb2025/7feb.jpeg', link: "https://drive.google.com/file/d/1_1TvlBYgYesiq6W0U6w_YpxcurWLU_BH/view" },
  { id: 8, img: '/assets/newspaper/feb2025/8feb.jpeg', link: "https://drive.google.com/file/d/1Z99VoJZhUh7Zq8fSnlv-xH3Iu1wgQrJI/view" },
  { id: 9, img: '/assets/newspaper/feb2025/9feb.jpeg', link: "https://drive.google.com/file/d/1MGKakQIoOkVop-CYqcuf5pNqY-FwZP9T/view?usp=sharing" },
  { id: 10, img: '/assets/newspaper/feb2025/10feb.jpeg', link: "https://drive.google.com/file/d/12e7hpAA2n3z0xhc5I65pjNIOBdevsOXQ/view?usp=sharing" },
  { id: 11, img: '/assets/newspaper/feb2025/11feb.jpeg', link: "https://drive.google.com/file/d/1JiJOqALwKV3KmGgikjEe1nkS3gVLfQMJ/view?usp=sharing" },
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

const mayData = [
  { id: 1, img: '/assets/newspaper/may2025/1stmay.jpeg', link: 'https://drive.google.com/file/d/1fpjwvs7Dm2XpOxtiYEmmyJry8dEWInOW/view' },
  { id: 2, img: '/assets/newspaper/may2025/2ndmay.jpeg', link: 'https://drive.google.com/file/d/1x0iZ-z4oJzFGs2ROFfjBUGKOJgfekS7c/view' },
  { id: 3, img: '/assets/newspaper/may2025/3rdmay.jpeg', link: 'https://drive.google.com/file/d/163HMr7rWvLhA-R9_R7tvVuCZv7eoTo6Q/view' },
  { id: 4, img: '/assets/newspaper/may2025/4thmay.jpeg', link: 'http://drive.google.com/file/d/1O33-Fds2OWAICYwcwQ32BIWbKamXbnB-/view' },
  { id: 5, img: '/assets/newspaper/may2025/5may.jpeg', link: 'https://drive.google.com/file/d/1BmHILm5nkg5GNqOt2HGND1AqougAsrSf/view' },
  { id: 6, img: '/assets/newspaper/may2025/6may.jpeg', link: 'https://drive.google.com/file/d/1lJmqJdWJUnjVtxrNLkkD9W-Yw8xenpc7/view' },
  { id: 7, img: '/assets/newspaper/may2025/7may.jpeg', link: 'https://drive.google.com/file/d/1urAYelw0QNLLhR-ZCnobAvhxDMJyj2Bu/view' },
  { id: 8, img: '/assets/newspaper/may2025/8may.jpeg', link: 'https://drive.google.com/file/d/1rk10lqy2DsSO-A4-tD5O78Oy3e0atO5c/view' },
  { id: 9, img: '/assets/newspaper/may2025/9may.jpeg', link: 'https://drive.google.com/file/d/1Aq1aI9s9v_zgsQkD3M6-BEpeTs3yU1MK/view' },
  { id: 10, img: '/assets/newspaper/may2025/10may.jpeg', link: 'https://drive.google.com/file/d/1a2GOix3ZJ-UzFHZwtxg282Ll3fCiUaUF/view' },
  { id: 11, img: '/assets/newspaper/may2025/11may.jpeg', link: 'https://drive.google.com/file/d/16gsHjblQ7a_4K-f8f5OKK_d5NS_e2b2b/view' },
  { id: 12, img: '/assets/newspaper/may2025/12may.jpeg', link: 'https://drive.google.com/file/d/17pKhFp0RbFOb_DXuBt3y-9I-LxKWfZnq/view' },
  { id: 13, img: '/assets/newspaper/may2025/13may.jpeg', link: 'https://drive.google.com/file/d/1_zQasNpmEntgFLou4HQFI9HFnxDf_fW1/view' },
  { id: 14, img: '/assets/newspaper/may2025/14may.jpeg', link: 'https://drive.google.com/file/d/1vxYcUJQntMT3DSLDUrDKCcpAN9r_pPej/view' },
  { id: 15, img: '/assets/newspaper/may2025/15may.jpeg', link: 'https://drive.google.com/file/d/1TOLMh9GwK5GHk68hifJ1KKOXMF873hD4/view' },
  { id: 16, img: '/assets/newspaper/may2025/16may.jpeg', link: 'https://drive.google.com/file/d/1xqrCLeJ7MIisZ7RB-wpMLrV4Wl_O_74h/view' },
  { id: 17, img: '/assets/newspaper/may2025/17may.jpeg', link: 'https://drive.google.com/file/d/1zMjE6y8lGdbzDZi6WPm5iCxu9H9sy515/view' },
  { id: 18, img: '/assets/newspaper/may2025/18may.jpeg', link: 'https://drive.google.com/file/d/1AP9DrLMHG0Uvk9dpshjmBkV73by0eoKU/view' },
  { id: 19, img: '/assets/newspaper/may2025/19may.jpeg', link: 'https://drive.google.com/file/d/1wyM4IHRxxusyUjMfvSN2dbnbW4yUKg5X/view' },
  { id: 20, img: '/assets/newspaper/may2025/20may.jpeg', link: 'https://drive.google.com/file/d/1C5IkeCIWHSJsGjfzETbw8J1B0ZjKNrWD/view' },
]

const juneData = [
  { id: 1, img: '/assets/newspaper/june2025/1june.jpeg', link: 'https://drive.google.com/file/d/1D44Q1muGK0WZSzaqlPAGdwy2_4PMdvse/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/june2025/2june.jpeg', link: 'https://drive.google.com/file/d/1j1BuiWnwjWzHSO0NpyY0bqFu9Pw7SSoa/view' },
  { id: 3, img: '/assets/newspaper/june2025/3june.jpeg', link: 'https://drive.google.com/file/d/1KvXr0csBMk7Q9Jzc4WpLMGCrJrrVa2BJ/view' },
  { id: 4, img: '/assets/newspaper/june2025/4june.jpeg', link: 'https://drive.google.com/file/d/11SWnXcJzt6a7xbBuKNvK0QA1fb8yBdUL/view?usp=sharing' },
  { id: 5, img: '/assets/newspaper/june2025/5june.jpeg', link: 'https://drive.google.com/file/d/1JiiDIx68dnAJiNxNJE7-23x5Pf3sSW1i/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/june2025/6june.jpeg', link: 'https://drive.google.com/file/d/19mrVvoXGxXG0t_g8yQc3scAmgSHkxhCf/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/june2025/7june.jpeg', link: 'https://drive.google.com/file/d/1MPp8tstLBSNwlr2PN0a_unBvEthEYCSg/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/june2025/8jun.jpeg', link: 'https://drive.google.com/file/d/1rVEDaurBCsRtLP-97YLR1DNOsJZn2gQN/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/june2025/9june.jpeg', link: 'https://drive.google.com/file/d/1lT62h78YC7pdAsWUDZ0yPNcXRxCZJ3mB/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/june2025/10june.jpeg', link: 'https://drive.google.com/file/d/1TTeMByq7wk-Hpk9IN8tGRXOrca8EuBKv/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/june2025/11june.jpeg', link: 'https://drive.google.com/file/d/1uVZlr_d0crL5EzGoJzn9g8QFW_rEvLdx/view?usp=sharing' },
  { id: 12, img: '/assets/newspaper/june2025/12june.jpeg', link: 'https://drive.google.com/file/d/1wLi4kYMehn7y2hBqFcj92H__Q7UJWfSI/view?usp=sharing' },
  { id: 13, img: '/assets/newspaper/june2025/13june.jpeg', link: 'https://drive.google.com/file/d/1CUGv_jC_dTrixqqhvH0eGSBrr8k-gK35/view?usp=sharing' },
  { id: 14, img: '/assets/newspaper/june2025/14june.jpeg', link: 'https://drive.google.com/file/d/1pfgZkEyXij4zP3ErzCjlK7xeMOXGFDbq/view?usp=sharing' },
  { id: 15, img: '/assets/newspaper/june2025/15june.jpeg', link: 'https://drive.google.com/file/d/14woeyvE9RIs-x-Rca2OfhcLk6od0ckUa/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/june2025/16june.jpeg', link: 'https://drive.google.com/file/d/1KPSUqtG7E1qFDDwDNxZ5NCoGM1PDogTl/view?usp=sharing' },
  { id: 17, img: '/assets/newspaper/june2025/17june.jpeg', link: 'https://drive.google.com/file/d/1bgvGW4SEHdhSKzfsohDzRDzmF7o4yG8G/view?usp=sharing' },
  { id: 18, img: '/assets/newspaper/june2025/18june.jpeg', link: 'https://drive.google.com/file/d/1YIRxky_lPzuO_vBTLdc6RZg_qRqD6ZO6/view?usp=sharing' },
  { id: 19, img: '/assets/newspaper/june2025/19june.jpeg', link: 'https://drive.google.com/file/d/17DFnPYmmFw_40PE00778MzpW7uRz4SgU/view?usp=sharing' },
  { id: 20, img: '/assets/newspaper/june2025/20june.jpeg', link: 'https://drive.google.com/file/d/1A-DOB5gzlDDYwEy1qbTxFmO-VBAKv2Ah/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/june2025/21june.jpeg', link: 'https://drive.google.com/file/d/1RfOk1CE9dGl7WYPIYVfKBD2zJUG8gp2q/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/june2025/22june.jpeg', link: 'https://drive.google.com/file/d/1PYyKqCnerDlBDee4WH0ZdYplsGnSdS_J/view?usp=sharing' },
  { id: 22, img: '/assets/newspaper/june2025/23june.jpeg', link: 'https://drive.google.com/file/d/1Qe1C3xgMH3_555ueYfIksK3H6VASPqmd/view?usp=sharing' },
  { id: 23, img: '/assets/newspaper/june2025/24june.jpeg', link: 'https://drive.google.com/file/d/1BXcDs_eEMswYW5mzyZV9SNps2TKbhntn/view?usp=sharing' },
  { id: 24, img: '/assets/newspaper/june2025/25june.jpeg', link: 'https://drive.google.com/file/d/1aMexUBYNEb2FWKgCWshjMkYMB4MbwECi/view' },
  { id: 25, img: '/assets/newspaper/june2025/26june.jpeg', link: 'https://drive.google.com/file/d/1C5dN-r3bcmVTBQROZ1cy2OdZv623IpMF/view?usp=sharing' },
  { id: 26, img: '/assets/newspaper/june2025/27june.jpeg', link: 'https://drive.google.com/file/d/1kf8bMFYgGo7te_PGWLgD01AC4svWKt_S/view?usp=sharing' },
  { id: 27, img: '/assets/newspaper/june2025/28june.jpeg', link: 'https://drive.google.com/file/d/1HX8klwK2VGawRnG-nUc52qerW0QCs9Xq/view?usp=sharing' },
  { id: 28, img: '/assets/newspaper/june2025/29june.jpeg', link: 'https://drive.google.com/file/d/1cw9VG-ezvbMi8JdWyfaKbGyMkEE8nw-w/view?usp=sharing' },
  { id: 29, img: '/assets/newspaper/june2025/30june.jpeg', link: 'https://drive.google.com/file/d/1bY6AKBG4evpwIYdFr8B-jAbcynxvl1d8/view?usp=sharing' },
]


const july2025 = [

{ id: 1, img: '/assets/newspaper/july2025/1july.jpeg', link: 'https://drive.google.com/file/d/1veCCEhF6lF1t52S6a43XmuabuT5lOT4V/view?usp=sharing' },
{ id: 2, img: '/assets/newspaper/july2025/2july.jpeg', link: 'https://drive.google.com/file/d/1xgs0eulsZ1bnF12hJgIQoPYyQ-KMRyNs/view?usp=sharing' },
{ id: 3, img: '/assets/newspaper/july2025/3july.jpeg', link: 'https://drive.google.com/file/d/1aCJxNzZ1zAWM8egLg3sF1J3EUFdzlRcv/view?usp=sharing' },
{ id: 4, img: '/assets/newspaper/july2025/4july.jpeg', link: 'https://drive.google.com/file/d/1w9gl-Daoc8Qlzvco0MtKf8sGhTUnmVFx/view?usp=sharing' },
{ id: 5, img: '/assets/newspaper/july2025/5july.jpeg', link: 'https://drive.google.com/file/d/1BFP88FlqQpLfdsfU1VrhIPj1mZOdYTwh/view?usp=sharing' },
{ id: 6, img: '/assets/newspaper/july2025/6july.jpeg', link: 'https://drive.google.com/file/d/1pxgPiqiL0j7YCmolF3S6DTX7NswdjlCx/view?usp=sharing' },
{ id: 7, img: '/assets/newspaper/july2025/7july.jpeg', link: 'https://drive.google.com/file/d/1LLOXh0T0JjJio9kre8F6BspkfQ9snJX7/view?usp=sharing' },
{ id: 8, img: '/assets/newspaper/july2025/8july.jpeg', link: 'https://drive.google.com/file/d/1cM9jXZZjntRP-A3nvAVL2fwMtNeZl5w1/view?usp=sharing' },
{ id: 9, img: '/assets/newspaper/july2025/9july.jpeg', link: 'https://drive.google.com/file/d/1i_yaV67dDsWgdOplNcvVhvnxf14IxRo7/view?usp=sharing' },
{ id: 10, img: '/assets/newspaper/july2025/10july.jpeg', link: 'https://drive.google.com/file/d/1OgMRc0iwEIqF1v2jofbPeHggF-2N0ZcI/view?usp=sharing' },
{ id: 11, img: '/assets/newspaper/july2025/11july.jpeg', link: 'https://drive.google.com/file/d/1p8YLwccAPCUr_-jrlv5ipITNO4eYsuoI/view?usp=sharing' },
{ id: 12, img: '/assets/newspaper/july2025/12july.jpeg', link: 'https://drive.google.com/file/d/116v8q5RYXgE9c5SJuFwcVJt-i2Mrt_1p/view?usp=sharing' },
{ id: 13, img: '/assets/newspaper/july2025/13july.jpeg', link: 'https://drive.google.com/file/d/1BVFaag9J8lEoTq5TDIcSopNLCoOfGqp_/view?usp=sharing' },
{ id: 14, img: '/assets/newspaper/july2025/14july.jpeg', link: 'https://drive.google.com/file/d/10GsnQo5okUAZ9JS8Y9tGUqcDgMPxnjgR/view?usp=sharing' },
{ id: 15, img: '/assets/newspaper/july2025/15july.jpeg', link: 'https://drive.google.com/file/d/1OaTARNbj8319EMGveOrJp626UCs5UnfM/view?usp=sharing' },
{ id: 16, img: '/assets/newspaper/july2025/16july.jpeg', link: 'https://drive.google.com/file/d/1Fne0GizFrP-n5aquvIX1d-QLFVyPewMB/view?usp=sharing' },
{ id: 17, img: '/assets/newspaper/july2025/17july.jpeg', link: 'https://drive.google.com/file/d/1-hsVqcD01KYPEr9W-WpHmkiBYjkezlvz/view?usp=sharing' },
{ id: 18, img: '/assets/newspaper/july2025/18july.jpeg', link: 'https://drive.google.com/file/d/1veUQdxHhKudsRSS8bI4nlQofvgzhPHnL/view?usp=sharing' },
{ id: 19, img: '/assets/newspaper/july2025/19july.jpeg', link: 'https://drive.google.com/file/d/1P-9NGW-tPSJfjCHZJkOaUImkQ3dgQR8u/view?usp=sharing' },
{ id: 21, img: '/assets/newspaper/july2025/20july.jpeg', link: 'https://drive.google.com/file/d/1BagxIro0o5iPb9vqB8RNF3ph-JBKU6Ik/view?usp=sharing' },
{ id: 22, img: '/assets/newspaper/july2025/21july.jpeg', link: 'https://drive.google.com/file/d/1kCb4vYh3m-RbJAxfEKR-YBitEtU5Gzi5/view?usp=sharing' },
{ id: 23, img: '/assets/newspaper/july2025/22july.jpeg', link: 'https://drive.google.com/file/d/1j-Wla-1qffNk-VFvWpgjhNOEuYk5Tpc_/view?usp=sharing' },
{ id: 24, img: '/assets/newspaper/july2025/23july.jpeg', link: 'https://drive.google.com/file/d/1TviRLwVxdcUdisle08RvlwNnXLnwvtaV/view?usp=sharing' },
{ id: 25, img: '/assets/newspaper/july2025/24july.jpeg', link: 'https://drive.google.com/file/d/1HS-VYC-Fp1W9f6UfK7S3jLIZdsRuRqn1/view?usp=sharing' },
// { id: 26, img: '/assets/newspaper/july2025/25july.jpeg', link: '' },
// { id: 27, img: '/assets/newspaper/july2025/26july.jpeg', link: '' },
// { id: 28, img: '/assets/newspaper/july2025/27july.jpeg', link: '' },



]



const tabData = [
  { id: 1, label: 'JANUARY 2025' },
  { id: 2, label: 'FEBRUARY 2025' },
  { id: 3, label: 'APRIL 2025' },
  { id: 4, label: 'MAY 2025' },
  { id: 5, label: "JUNE 2025" },
  { id: 6, label: "JULY 2025" }
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
              {value === 3 && renderGridItems(mayData)}
              {value === 4 && renderGridItems(juneData)}
                {value === 5 && renderGridItems(july2025)}
            </TabPanel>
          ))}
        </Box>

      </Box>
    </Box>
  )
}

export default Optional2025

