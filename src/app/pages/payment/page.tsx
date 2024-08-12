"use client"; 
import React from 'react';
import styles from "../payment/payment.module.css";
import SimpleTable from "@/components/SimpleTable/SimpleTable";
import Image from 'next/image';
import Rating from "@/components/Rating/Rating";


export default function PayScreen() {
  return (
    <div className={styles.ContentWrapper}>
      <div className={styles.PaymentPage}>
        <div className={styles.PaymentFormOrder}>
          <div className={styles.PaymentOrder}>
            <div className={styles.PaymentOrderDetails}>
              <div className={styles.Checkmark}>
                <div className={styles.IconCheckSuccess}>
                  <a>
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </a>
                </div>
                <div className={styles.TitleCheck}>
                  <p>Giao dịch thành công</p>
                </div>
                <div className={styles.Price}>
                  <p>35.000đ</p>
                </div>
              </div>
              <div className={styles.OrderDetails}>
                <div className={styles.Title}>
                  <p>Thông tin đơn đặt hàng</p>
                </div>
                <div className={styles.SimpleTable}>
                  <SimpleTable title="Tên khách hàng" content="Nguyễn Văn Chuẩn"/>
                </div>
                <div className={styles.SimpleTable}>
                  <SimpleTable title="Thời gian nhận phòng" content="07:00 - 10/08/2024"/>
                </div>
                <div className={styles.SimpleTable}>
                  <SimpleTable title="Dịch vụ đi kèm" content="Không có"/>
                </div>
                <div className={styles.SimpleTable}>
                  <SimpleTable title="Số điện thoại liên lạc" content="0865562385"/>
                </div>
                <div className={styles.Bottom}>
                  <button className={styles.Contect}>Liên hệ</button>
                  <button className={styles.Home}>Trang chủ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.PaymentFormPrice}>
          <div className={styles.PaymentPriceDetail}>
            <div className={styles.PriceDetail}>
            <div className={styles.Title}>
                  <p>Thông tin chi tiết giao dịch</p>
                </div>
                <div className={styles.SimpleTable}>
                  <SimpleTable title="Mã giao dịch" content="11223344556677"/>
                </div>
                <div className={styles.SimpleTable}>
                  <SimpleTable title="Thời gian giao dịch" content="21:41 - 07/08/2024"/>
                </div>
                <div className={styles.SimpleTable}>
                  <SimpleTable title="Dịch vụ" content="Không có"/>
                </div>
                <div className={styles.SimpleTable}>
                  <SimpleTable title="Phí dịch vụ" content="Miễn phí"/>
                </div>
                <div className={styles.SimpleTable}>
                  <table className={styles.simpleTable}>
                    <tbody>
                      <tr>
                        <td className={styles.simpleTableTitle}>Trạng thái</td>
                        <td className={styles.simpleTableContent}>
                          <div className={styles.StatusSuccess}>
                            <p>Thành công</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.Barcode}>
                  <div className={styles.BarcodeImage} >
                    <Image className={styles.Image} src={require("../../../image/barcode.jpg")} alt="barcode"/>
                  </div>
                  
                </div>
            </div>
            <div className={styles.Comment}>
              <div className={styles.Title}>
                <div className={styles.Subject}>
                  <p>Bạn ơi, hãy chia sẻ cảm nhận nha!</p>
                </div>
                <div className={styles.Content}>
                  <p>Cảm ơn bạn nhiều. Woony Maica mong chờ xem đánh giá của bạn.</p>
                </div>
              </div>
              <div className={styles.Rating}>
                <Rating></Rating>
              </div>
              <div className={styles.BtnRating}>
                <button className={styles.Button}>Gửi đánh giá</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
