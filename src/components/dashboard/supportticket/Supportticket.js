import React from 'react'
import Logo from '../../assets/fggc.png'
import './Supportticket.css'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Supportticket = () => {
  return (
    <div className='supportticket-container'>
        <div className='supportticket-heading'>
            <img src={Logo} alt='logo' />
            <h2>SUPPORT TICKET</h2>
        </div>
        <div className='supportticket-content'>
            <h3>Still need help? Don’t worry we’ve got your back</h3>
            <div className='supportticket-email'>
                <div className='supportticket-sign'>
                    <div className='supportticket-shoot'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 50 51" fill="none">
                            <path d="M49.221 0.341969C49.8348 0.797067 50.0858 1.40386 49.9742 2.16236L42.832 45.8517C42.739 46.4016 42.4414 46.8283 41.9393 47.1317C41.6789 47.2834 41.3906 47.3592 41.0744 47.3592C40.8698 47.3592 40.6466 47.3118 40.4048 47.217L25.7019 41.1016L17.3879 50.4027C17.0531 50.8009 16.616 51 16.0766 51C15.8162 51 15.6023 50.9621 15.4349 50.8862C15.0815 50.7535 14.8025 50.5307 14.5979 50.2178C14.3933 49.9049 14.291 49.5589 14.291 49.1796V36.3231L1.12258 30.8335C0.434397 30.568 0.0624063 30.0466 0.00660773 29.2691C-0.0491909 28.5296 0.248402 27.9702 0.899385 27.5909L47.3238 0.285082C47.9748 -0.113128 48.6072 -0.0941655 49.221 0.341969ZM39.6794 42.9789L45.8452 5.34804L5.83756 28.8709L15.2117 32.7677L39.2888 14.5922L25.953 37.2617L39.6794 42.9789Z" fill="white"/>
                        </svg>
                        <p>Shoot us an email</p>
                    </div>
                    <a href='mailto:firstgoldengiftedclub@gmail.com'>firstgoldengiftedclub@gmail.com</a>
                </div>
                <div className='supportticket-input'>
                    <div className='supportticket-text'>
                        <label className='supportticket-label'>Your name</label>
                        <input type="text" name="username" placeholder="Type your name"/>
                    </div>
                    <div className='supportticket-text'>
                        <label className='supportticket-label'>Your message</label>
                        <textarea name="message" rows="4" cols="50" placeholder="Type your message"></textarea>
                    </div>
                    <div className='supportticket-button'>
                        <a href='mailto:firstgoldengiftedclub@gmail.com '>Submit your ticket</a>
                    </div>
                    

                </div>
            </div>
        </div>
        <div className='footer-contact'>
                    <h4>Contact us</h4>
                    <div className='footer-social'>
                        <a href='https://www.facebook.com/profile.php?id=61556778639573&mibextid=ZbWKwL' className='social' style={{color: "#1877F2",}}><FaFacebookF size={20}/></a>
                        <a href='https://twitter.com/FirstClub33810' className='social' style={{color: "black",}}><FaSquareXTwitter size={20}/></a>
                        <a href='https://chat.whatsapp.com/CmnTFlL7513HsnNyEfAhzz' className='social' style={{color: "#25D366",}}><FaWhatsapp size={20}/></a> 
                        <a href='https://youtube.com/@FirstGoldenGiftedClub?si=T6rTZyLsASShm-Eh' className='social' style={{color: "#FF0000",}}><FaYoutube size={20}/></a>
                        <a href='https://www.tiktok.com/@first.golden.gift?_t=8kOimu6KLvZ&_r=1' className='social' style={{color: "black",}}><FaTiktok size={20}/></a>
                        <a href='https://www.instagram.com/first_golden_gifted_club?igsh=MzNlNGNkZWQ4Mg==' className='social' style={{color: "#E4405F",}}><FaInstagram size={20}/></a>
                        <a href='google.com' className='social' style={{color: "#4285F4",}}><FaGoogle size={20}/></a>
                        <a href='https://t.me/first_golden_gifted_club' className='social' style={{color: "#0088CC",}}><FaTelegram size={20}/></a>
                    </div>

                </div>
        <div className='supportticket-footer'>
            <div className='supportticket-instagram'>
                <a href='https://www.instagram.com/first_golden_gifted_club?igsh=MzNlNGNkZWQ4Mg=='><svg xmlns="http://www.w3.org/2000/svg" width="79" height="71" viewBox="0 0 89 81" fill="none">
                    <path d="M44.5394 19.8636C43.7567 19.8636 42.9826 19.8999 42.2199 19.971C41.4573 20.0421 40.7051 20.1475 39.9658 20.2857C39.2264 20.424 38.5002 20.5953 37.7886 20.7975L35.6998 21.4955L33.711 22.3694L31.8344 23.4087L30.0809 24.6024L28.4628 25.9401L26.9916 27.4114L25.6786 29.0055L24.5353 30.7119L23.5744 32.5198C23.2856 33.1381 23.0287 33.7721 22.8063 34.4193C22.5839 35.0664 22.3957 35.7271 22.2435 36.3992C22.0912 37.0713 21.9755 37.755 21.897 38.4487C21.8187 39.1423 21.7793 39.846 21.7793 40.5575C21.7793 41.2691 21.8192 41.9728 21.897 42.6664C21.9745 43.3546 22.0901 44.0387 22.2435 44.7162C22.3957 45.3908 22.5839 46.0489 22.8063 46.6961C23.0287 47.3433 23.2853 47.977 23.5744 48.5956L24.5353 50.4035L25.6786 52.1096L26.9916 53.704L28.4628 55.1753L30.0809 56.5131L31.8344 57.7068L33.711 58.7457L35.6998 59.6198L37.7886 60.3179L39.9658 60.8298C40.7108 60.9693 41.4632 61.0745 42.2199 61.1448C42.9906 61.2162 43.7648 61.2522 44.5394 61.2516C45.322 61.2516 46.0961 61.2156 46.8586 61.1448C47.6153 61.0745 48.3677 60.9693 49.1127 60.8298L51.2902 60.3179L53.379 59.6198L55.3675 58.7457L57.2444 57.7068L58.9979 56.5131L60.6162 55.1753L62.0877 53.704L63.4005 52.1096L64.5439 50.4035L65.5049 48.5956L66.2726 46.6961C66.4951 46.0489 66.6836 45.3882 66.8356 44.7162L67.1817 42.6662C67.2602 41.9726 67.2998 41.2688 67.2998 40.5573C67.2998 39.8458 67.2602 39.142 67.1817 38.4484C67.1045 37.7603 66.9889 37.0763 66.8356 36.3989C66.6836 35.7243 66.4951 35.0664 66.2726 34.419L65.5049 32.5195L64.5439 30.7116L63.4005 29.0052L62.0877 27.4111L60.6162 25.9398L58.9979 24.6021L57.2444 23.4085L55.3675 22.3692L53.379 21.4953L51.2902 20.7972L49.1127 20.2855L46.8586 19.9707C46.088 19.8991 45.3139 19.8635 44.5394 19.8636ZM44.5394 27.0064C45.0569 27.0064 45.5675 27.0297 46.0705 27.0759L47.5531 27.2801L48.9853 27.6122L50.3567 28.0656L51.6606 28.6339L52.8866 29.3099L54.0328 30.0876L55.0895 30.9599L56.0489 31.9206L56.9043 32.9627L57.6478 34.0801L58.2723 35.266C58.4598 35.6718 58.6263 36.0878 58.7712 36.5131C58.916 36.9384 59.0378 37.3731 59.1362 37.8158C59.2345 38.2584 59.3073 38.7089 59.3605 39.1664L59.437 40.5588C59.437 41.0293 59.4113 41.4938 59.3605 41.9515C59.3098 42.4093 59.2351 42.8597 59.1362 43.3022C59.0372 43.7446 58.9152 44.1793 58.7712 44.6048L58.2723 45.852L57.6478 47.0378L56.9043 48.155L56.0489 49.1973L55.0895 50.158L54.0328 51.0304L52.8866 51.8081L51.6606 52.4841L50.3567 53.0524L48.9853 53.5057L47.5531 53.8378L46.0705 54.0418C45.5616 54.0882 45.0505 54.1114 44.5391 54.1114C44.0276 54.1114 43.5164 54.0882 43.0075 54.0418L41.5248 53.8378C41.0381 53.7481 40.5602 53.637 40.0923 53.5057L38.7209 53.0524L37.4171 52.4841L36.1911 51.8081L35.0449 51.0304L33.9882 50.158L33.0288 49.1973L32.1734 48.155L31.4298 47.0378L30.8054 45.852L30.3064 44.6048L29.9415 43.3022L29.7171 41.9515C29.6661 41.4888 29.6405 41.024 29.6407 40.5588C29.6405 40.0938 29.6661 39.6291 29.7171 39.1664C29.7675 38.7089 29.8425 38.2582 29.9415 37.8158C30.0394 37.3764 30.1613 36.9417 30.3067 36.5133L30.8057 35.2662L31.4301 34.0804L32.1737 32.963L33.029 31.9209L33.9885 30.9602L35.0451 30.0878L36.1913 29.3101L37.4173 28.6341L38.7212 28.0658C39.17 27.8943 39.6278 27.743 40.0929 27.6125L41.5254 27.2804C42.0121 27.1906 42.5076 27.1221 43.008 27.0762C43.517 27.0298 44.0279 27.0063 44.5394 27.0064Z" fill="url(#paint0_radial_535_13536)"/>
                    <path d="M68.2225 13.9766C68.042 13.9766 67.8615 13.9849 67.6817 14.0015C67.5018 14.018 67.3232 14.0428 67.1458 14.0757C66.969 14.1086 66.7935 14.1495 66.6211 14.1984C66.448 14.2473 66.2787 14.3042 66.1118 14.3686C65.9455 14.4332 65.783 14.5054 65.6242 14.5848C65.4653 14.6641 65.3114 14.7506 65.1625 14.8441C65.0129 14.9375 64.8689 15.0378 64.7311 15.1445C64.5926 15.2511 64.4604 15.364 64.3343 15.4827C64.2088 15.6014 64.0895 15.7259 63.977 15.8555C63.8646 15.9853 63.7595 16.12 63.6618 16.2593C63.5642 16.3985 63.4746 16.5421 63.3924 16.6896C63.3108 16.8371 63.2366 16.9883 63.1711 17.1426C63.1056 17.2969 63.0487 17.4541 62.9999 17.6136C62.9517 17.7731 62.9121 17.9347 62.8818 18.0978C62.8509 18.2609 62.8293 18.4253 62.8163 18.5904C62.8071 18.7072 62.8027 18.8245 62.8027 18.9417C62.8027 19.1073 62.8114 19.2728 62.8299 19.4376C62.8479 19.6023 62.875 19.766 62.9109 19.9283C62.9467 20.0905 62.9912 20.251 63.0444 20.4091C63.0982 20.5673 63.16 20.7229 63.2304 20.8754C63.3009 21.028 63.3794 21.1772 63.4665 21.3225C63.5531 21.4678 63.6476 21.6091 63.7496 21.7458C63.8516 21.8823 63.961 22.0141 64.0772 22.1407C64.194 22.2674 64.317 22.3886 64.4468 22.504C64.5766 22.6193 64.7119 22.7286 64.8541 22.8315C64.9956 22.9344 65.1427 23.0308 65.2947 23.1203C65.4468 23.2098 65.6038 23.2922 65.7645 23.3673C65.9258 23.4425 66.0908 23.5102 66.2589 23.5702C66.4276 23.6302 66.5988 23.6824 66.7731 23.7267C66.9474 23.7709 67.1236 23.8071 67.3016 23.8352C67.4796 23.8633 67.6594 23.8834 67.8393 23.8951C67.9672 23.9035 68.0951 23.9076 68.2231 23.9076C68.4036 23.9076 68.5846 23.8994 68.7645 23.8829C68.9437 23.8664 69.123 23.8416 69.2997 23.8087C69.4771 23.7759 69.652 23.7349 69.8251 23.686C69.9975 23.637 70.1675 23.5802 70.3337 23.5158C70.5 23.4513 70.6632 23.3792 70.8214 23.2998C70.9802 23.2205 71.1341 23.1338 71.2837 23.0404C71.4326 22.9469 71.5766 22.8467 71.7151 22.7401C71.8529 22.6334 71.9852 22.5205 72.1113 22.4017C72.2374 22.283 72.3566 22.1585 72.4685 22.0289C72.581 21.8991 72.6861 21.7644 72.7837 21.6251C72.8814 21.4858 72.9716 21.3421 73.0532 21.1946C73.1354 21.047 73.2096 20.8958 73.2751 20.7415C73.3406 20.5872 73.3974 20.4301 73.4457 20.2705C73.4939 20.1111 73.5334 19.9495 73.5643 19.7863C73.5952 19.6233 73.6169 19.4589 73.6292 19.2938C73.6385 19.1769 73.6434 19.0597 73.6434 18.9425C73.6434 18.7769 73.6342 18.6115 73.6162 18.4468C73.5983 18.2821 73.5711 18.1184 73.5353 17.9561C73.4994 17.7939 73.4543 17.6334 73.4012 17.4753C73.3474 17.3171 73.2856 17.1615 73.2151 17.009C73.1447 16.8565 73.0662 16.7072 72.9796 16.5619C72.8931 16.4166 72.7985 16.2753 72.6966 16.1386C72.594 16.002 72.4846 15.8701 72.3684 15.7434C72.2516 15.6168 72.1286 15.4955 71.9994 15.3802C71.8696 15.2649 71.7336 15.1556 71.5921 15.0527C71.4506 14.9498 71.3035 14.8535 71.1514 14.7641C70.9994 14.6746 70.8424 14.5922 70.6811 14.5171C70.5198 14.4419 70.3548 14.3742 70.1866 14.3142C70.0185 14.2542 69.8467 14.202 69.6724 14.1577C69.4987 14.1134 69.322 14.0771 69.144 14.049C68.966 14.0209 68.7867 14.0009 68.6063 13.9893C68.4783 13.981 68.3504 13.9766 68.2225 13.9766Z" fill="url(#paint1_radial_535_13536)"/>
                    <path d="M40.2233 0.0749735C37.7479 0.0713403 35.5388 0.0806812 33.5543 0.106111L28.234 0.235857C26.6578 0.298135 25.2653 0.379351 24.0153 0.484445C23.3904 0.536862 22.8007 0.595507 22.2419 0.660121C21.71 0.721124 21.1798 0.792157 20.6512 0.873168C20.1479 0.951018 19.6703 1.03509 19.2124 1.12643C18.7546 1.21777 18.3172 1.31638 17.8952 1.42225C17.4827 1.52578 17.0733 1.63966 16.6678 1.76375C16.2703 1.88571 15.8825 2.01494 15.4996 2.15299C14.7337 2.42909 13.9868 2.73891 13.2175 3.08612C12.6256 3.35339 12.0787 3.62404 11.5592 3.91052C11.0397 4.197 10.5476 4.49957 10.0658 4.82913C9.56952 5.17017 9.0912 5.53231 8.63248 5.91435C8.15287 6.31187 7.66306 6.7491 7.15409 7.23774C6.51459 7.84834 5.95887 8.41764 5.46561 8.97632C5.21898 9.25554 4.98803 9.53167 4.77049 9.80932C4.55534 10.0829 4.34967 10.3627 4.15377 10.648C3.95989 10.9308 3.77627 11.2189 3.60063 11.5152C3.42226 11.8167 3.25368 12.1228 3.09511 12.4333C2.77064 13.0675 2.46785 13.7505 2.16562 14.5129C1.9414 15.0765 1.74063 15.6476 1.56372 16.225C1.38325 16.8151 1.22272 17.4324 1.07959 18.1001C0.936459 18.7678 0.811575 19.4858 0.701802 20.2798C0.583513 21.1502 0.489014 22.0232 0.418394 22.8979C0.33856 23.8595 0.272412 24.9177 0.218239 26.0956L0.0899347 30.0118L0.0209349 34.7857L0.000976562 40.556L0.0594264 48.9472L0.241904 55.3048L0.382468 57.7879L0.558104 59.8461C0.614406 60.4007 0.684848 60.9537 0.76938 61.5055C0.846359 61.9954 0.929048 62.4241 1.01801 62.7953C1.19851 63.5496 1.41195 64.2972 1.65782 65.0363C1.89323 65.7439 2.16245 66.4414 2.46471 67.1277C2.76181 67.7999 3.08684 68.4479 3.44039 69.0717C3.79395 69.6955 4.176 70.2951 4.58658 70.8711C4.99716 71.4466 5.43624 71.9989 5.90498 72.5277C6.37318 73.0564 6.87121 73.5621 7.39705 74.0442C7.92363 74.5268 8.47908 74.9858 9.06444 75.4223C9.65666 75.8639 10.2724 76.279 10.9092 76.6654C11.5002 77.0249 12.085 77.3545 12.6741 77.6566C13.2631 77.9592 13.8573 78.2331 14.468 78.4829C15.0787 78.7321 15.7049 78.9565 16.359 79.1584C17.013 79.3604 17.6945 79.5398 18.4147 79.699C19.1349 79.8587 19.8973 79.9982 20.7042 80.1203C21.5111 80.2424 22.3736 80.347 23.2951 80.437C24.2166 80.527 25.1997 80.6012 26.2561 80.6637C27.3125 80.7261 28.4415 80.7756 29.6547 80.8156C31.5288 80.8774 34.3658 80.9134 37.6373 80.9275L48.2281 80.9078L58.257 80.7801L62.0703 80.6823L64.5543 80.5664C65.0877 80.5264 65.6093 80.4797 66.113 80.4252C66.6167 80.3706 67.113 80.3082 67.597 80.2367C68.0803 80.1659 68.5531 80.0866 69.0173 79.9982C69.4765 79.9111 69.9332 79.8137 70.3869 79.7069C70.8362 79.6028 71.2793 79.4847 71.7182 79.3592C72.1564 79.2344 72.5909 79.0988 73.0223 78.9531C73.4561 78.8069 73.8857 78.6511 74.3115 78.4862C74.7398 78.3197 75.1675 78.1426 75.5971 77.9541C76.2565 77.665 76.7875 77.4237 77.2535 77.1886C77.6923 76.9697 78.1144 76.7251 78.518 76.4556C78.916 76.189 79.3116 75.8852 79.7677 75.5027C80.2238 75.1202 80.7411 74.6596 81.3808 74.0768C81.9439 73.5649 82.4179 73.12 82.8271 72.7156C83.2362 72.3111 83.5811 71.9472 83.8833 71.5962C84.1714 71.2632 84.4396 70.9167 84.6874 70.5578C84.9291 70.2074 85.1516 69.8434 85.3778 69.4401C85.719 68.8332 86.0224 68.2707 86.2938 67.7279C86.5577 67.2053 86.7987 66.6726 87.0163 66.1326C87.2307 65.5966 87.4168 65.0515 87.5731 64.4991C87.7338 63.931 87.8723 63.3308 87.9922 62.6727C88.1115 62.0146 88.2128 61.2985 88.3006 60.4986C88.3884 59.6993 88.4631 58.8151 88.5286 57.8222L88.7029 54.4884L88.8519 50.3425L88.9588 45.7235L88.9996 40.8939L88.9044 31.4081L88.7771 27.1595L88.6034 23.5115L88.3865 20.6675C88.308 19.8761 88.2227 19.2527 88.1331 18.8313C88.033 18.3657 87.9217 17.9022 87.7987 17.4412C87.6788 16.9927 87.5472 16.5468 87.4038 16.1041C87.2641 15.6727 87.1121 15.2446 86.9483 14.8204C86.7863 14.4013 86.6145 13.991 86.4347 13.5896C86.2554 13.1881 86.0608 12.7961 85.8587 12.4123C85.6559 12.0285 85.4439 11.654 85.2214 11.2881C84.9983 10.9223 84.7665 10.5655 84.5237 10.2175C84.2814 9.86951 84.0286 9.53032 83.7653 9.20025C83.5039 8.87124 83.2307 8.54977 82.947 8.23624C82.6645 7.9245 82.3716 7.62092 82.0681 7.32594C81.7653 7.03142 81.4519 6.74567 81.1293 6.46914C80.806 6.19251 80.4735 5.9247 80.1305 5.66572C79.7856 5.40591 79.4327 5.15589 79.0705 4.91606C78.7053 4.67377 78.332 4.44169 77.9506 4.22011C77.5643 3.99537 77.1713 3.78111 76.7708 3.5776C76.3641 3.37068 75.95 3.17442 75.5309 2.98907C74.8344 2.68105 74.1904 2.40781 73.5587 2.16544C72.937 1.92491 72.3035 1.71128 71.6601 1.52527C71.013 1.33973 70.3393 1.18067 69.5982 1.0434C68.8566 0.906125 68.0481 0.79169 67.1334 0.694378C66.2187 0.597071 65.1971 0.518446 64.0283 0.453054C62.8602 0.387662 61.5458 0.336278 60.0452 0.29476L54.9455 0.190964L48.4913 0.12168L40.2262 0.0754882L40.2233 0.0749735ZM44.5158 7.21153L56.4348 7.27329L60.9311 7.35216C62.1692 7.38382 63.1142 7.42095 63.668 7.46376C64.3899 7.51905 65.0765 7.58829 65.7341 7.67137C66.3646 7.75063 66.9925 7.84918 67.6155 7.96691C68.2144 8.0811 68.7855 8.21081 69.3325 8.35717C69.8788 8.50354 70.4011 8.66756 70.9017 8.84891C71.4029 9.03032 71.8819 9.22984 72.343 9.44837C72.8004 9.66521 73.2448 9.90382 73.6743 10.1632C74.102 10.4214 74.5142 10.6996 74.9147 10.9993C75.3146 11.299 75.7028 11.6203 76.0816 11.9639C76.4821 12.3264 76.8511 12.6956 77.191 13.0765C77.5297 13.4552 77.8437 13.852 78.1299 14.2648C78.4197 14.6835 78.6805 15.1181 78.9117 15.5661C79.1478 16.0229 79.3598 16.5055 79.5502 17.0185C79.7411 17.5315 79.9105 18.0767 80.0607 18.6593C80.2183 19.2769 80.3499 19.8997 80.4562 20.5264C80.5699 21.1907 80.6676 21.8991 80.7504 22.6576C80.8326 23.416 80.9012 24.2249 80.9575 25.0903C81.0026 25.7844 81.0421 26.7005 81.0755 27.7823L81.159 31.471L81.2226 40.5065L81.1503 49.5334L81.0632 53.2115L80.9426 55.8866C80.8598 57.1394 80.772 58.1924 80.667 59.1087C80.6144 59.5671 80.557 59.9912 80.4939 60.3889C80.4346 60.7647 80.3641 61.1387 80.2832 61.5111C80.209 61.8509 80.1231 62.1884 80.0248 62.5236C79.9315 62.8426 79.8258 63.1592 79.709 63.4726C79.5909 63.787 79.463 64.0981 79.3246 64.4052C79.1781 64.7303 79.0236 65.0515 78.861 65.3699C78.7164 65.6539 78.5644 65.9307 78.4037 66.1996C78.2448 66.4662 78.0755 66.7272 77.8975 66.9831C77.7207 67.2368 77.5353 67.4832 77.3412 67.7217C77.1484 67.9591 76.9463 68.1902 76.7349 68.4147C76.5248 68.6386 76.3054 68.8546 76.0773 69.0638C75.8492 69.2725 75.6125 69.4739 75.3672 69.6685C75.1224 69.8631 74.8678 70.0504 74.6045 70.2304C74.3418 70.4104 74.0692 70.5831 73.788 70.7485C73.5062 70.9144 73.2163 71.0731 72.9166 71.2249C72.6168 71.3762 72.3078 71.5208 71.9901 71.6586C71.6662 71.7987 71.3387 71.9297 71.0062 72.0518C70.6631 72.1778 70.3164 72.2948 69.966 72.4034C69.2527 72.6244 68.5012 72.8185 67.7094 72.9855C66.885 73.1594 66.0524 73.3011 65.2144 73.4108C64.8917 73.4536 64.1513 73.494 63.0907 73.5312L59.049 73.6336L47.59 73.7691L35.5961 73.786L30.8859 73.7404L27.8274 73.6538L25.5721 73.5092C24.8718 73.4558 24.2206 73.3962 23.6104 73.3281C23.0003 73.2606 22.4321 73.1852 21.8974 73.0997C21.3908 73.0204 20.8873 72.9248 20.3877 72.8146C19.9322 72.7139 19.4813 72.5963 19.0363 72.4624C18.6072 72.3325 18.1968 72.1896 17.7977 72.0327C17.3985 71.8757 17.0107 71.7036 16.6267 71.5157C16.2426 71.3279 15.8626 71.1242 15.4782 70.9015C15.1883 70.7339 14.908 70.564 14.6383 70.3846C14.3685 70.2046 14.1079 70.0251 13.857 69.8372C13.6061 69.6494 13.3652 69.4559 13.1328 69.2567C12.9019 69.0582 12.6791 68.8523 12.4645 68.6397C12.2506 68.4271 12.0462 68.2088 11.85 67.9827C11.6531 67.7554 11.4655 67.5214 11.2875 67.2818C11.1069 67.0382 10.936 66.7891 10.7752 66.5348C10.6126 66.2777 10.4581 66.0122 10.3112 65.7377C10.1619 65.4587 10.0226 65.1752 9.89356 64.8878C9.76241 64.5947 9.63806 64.2927 9.52118 63.9811C9.28737 63.3567 9.08212 62.6924 8.90362 61.9842C8.72513 61.276 8.57284 60.5234 8.44397 59.7212C8.31511 58.9197 8.21134 58.0692 8.12864 57.1658C8.06764 56.5004 8.01918 55.4636 7.9821 54.1558L7.90453 49.5044L7.93303 37.6469L8.15744 26.3164L8.32852 22.3244L8.42543 21.0048C8.45912 20.6525 8.49391 20.3914 8.52951 20.2346C8.64701 19.7191 8.7653 19.2392 8.88761 18.7901C9.00189 18.3663 9.12903 17.9455 9.26883 17.5282C9.40171 17.1343 9.5417 16.7653 9.6914 16.4157C9.83571 16.0771 9.99659 15.7445 10.1735 15.419C10.3463 15.1025 10.532 14.7993 10.7335 14.5043C10.9351 14.2093 11.1527 13.9231 11.3899 13.6384C11.6271 13.3537 11.8825 13.0727 12.1605 12.7878C12.4385 12.5029 12.7388 12.2151 13.0644 11.9185C13.4439 11.5711 13.839 11.2382 14.2488 10.9207C14.6357 10.6211 15.0392 10.3397 15.4577 10.0776C15.8691 9.8181 16.2911 9.58719 16.7305 9.37491C17.1699 9.16267 17.6266 8.97086 18.107 8.79834C18.5874 8.62577 19.0921 8.47136 19.6267 8.33124C20.1884 8.18786 20.7563 8.06552 21.3289 7.96455C21.9311 7.85717 22.5706 7.76346 23.2535 7.68172C23.9363 7.59999 24.6628 7.5294 25.4395 7.46814C25.9812 7.42562 26.9147 7.38771 28.1439 7.35581L32.6174 7.27537L44.5178 7.20917L44.5158 7.21153Z" fill="url(#paint2_radial_535_13536)"/>
                    <defs>
                        <radialGradient id="paint0_radial_535_13536" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.1799 86.8195) rotate(-8.68799) scale(187.655 104.157)">
                        <stop stop-color="#FED576"/>
                        <stop offset="0.263" stop-color="#F47133"/>
                        <stop offset="0.609" stop-color="#BC3081"/>
                        <stop offset="1" stop-color="#4C63D2"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_535_13536" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.1801 86.8194) rotate(-8.688) scale(187.655 104.157)">
                        <stop stop-color="#FED576"/>
                        <stop offset="0.263" stop-color="#F47133"/>
                        <stop offset="0.609" stop-color="#BC3081"/>
                        <stop offset="1" stop-color="#4C63D2"/>
                        </radialGradient>
                        <radialGradient id="paint2_radial_535_13536" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.18 86.8214) rotate(-8.68799) scale(187.655 104.157)">
                        <stop stop-color="#FED576"/>
                        <stop offset="0.263" stop-color="#F47133"/>
                        <stop offset="0.609" stop-color="#BC3081"/>
                        <stop offset="1" stop-color="#4C63D2"/>
                        </radialGradient>
                    </defs>
                </svg></a>
                <p>Like us on Instagram </p>
            </div>
            <div className='supportticket-facebook'>
                <a href='https://www.facebook.com/profile.php?id=61556778639573&mibextid=ZbWKwL'><svg xmlns="http://www.w3.org/2000/svg" width="74" height="78" viewBox="0 0 84 88" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M83.3996 44.0008C83.3996 20.1439 64.8622 0.800781 41.9996 0.800781C19.1368 0.800781 0.599609 20.1439 0.599609 44.0008C0.599609 65.5612 15.7369 83.434 35.5315 86.6788V56.4913H25.0169V44.0008H35.5315V34.481C35.5315 23.6551 41.7144 17.6712 51.1692 17.6712C55.6986 17.6712 60.4376 18.5155 60.4376 18.5155V29.1471H55.2154C50.0747 29.1471 48.4677 32.4763 48.4677 35.8965V44.0004H59.9482L58.1146 56.4909H48.4674V86.6782C68.2622 83.44 83.399 65.5672 83.399 44.0004L83.3996 44.0008Z" fill="#1977F3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.1149 56.4917L59.9492 44.0012H48.4684V35.8972C48.4684 32.4831 50.0693 29.1479 55.216 29.1479H60.4385V18.5163C60.4385 18.5163 55.6996 17.6719 51.1698 17.6719C41.7151 17.6719 35.5322 23.6499 35.5322 34.4818V44.0016H25.0176V56.4921H35.5322V86.6796C37.6396 87.0252 39.7996 87.2016 42.0003 87.2016C44.201 87.2016 46.3609 87.0192 48.4684 86.6796V56.4921H58.1155L58.1149 56.4917Z" fill="#FEFEFE"/>
                </svg></a>
                <p>Like us on Facebook </p>
            </div>
 
        </div>
    </div>
  )
}

export default Supportticket