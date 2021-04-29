var APP_DETAIL = [
  // ผู้มีรายได้ประจำ
  {
    tabTitle: "ผู้มีรายได้ประจำ",
    tabId: "app-detail-1",
    tabCards: [
      {
        cardTitle: "คุณสมบัติ",
        cardRemark: null,
        cardName: "qualification",
        cardRoleClassName: "qualification-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "รายได้ขั้นต่ำ (บัตรหลัก) คนไทย",
                rowSubTitle: null,
                rowBody: "<ul><li>รายได้ 15,000 บาท / เดือน ขึ้นไป</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "รายได้ขั้นต่ำ (บัตรหลัก) ต่างชาติ",
                rowSubTitle: null,
                rowBody: "<ul><li>รายได้ 50,000 บาท / เดือน ขึ้นไป</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "อายุบัตรหลัก",
                rowSubTitle: null,
                rowBody: "<ul><li>20 - 80 ปี</li></ul>",
                rowRemark: null
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "อายุบัตรเสริม",
                rowSubTitle: null,
                rowBody: "<ul><li>15 ปี</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "อายุงาน / อายุกิจการ (บัตรหลัก)",
                rowSubTitle: null,
                rowBody: "<ul><li>6 เดือน</li></ul>",
                rowRemark: null
              }
            ]
          }
        ]
      },
      {
        cardTitle: "เอกสารประกอบการสมัคร",
        cardRemark: '<p class="display-7 font-default"><strong>หมายเหตุ :</strong></p>\
                      <ul class="remark">\
                        <li>กรณีมีบัญชีเงินเดือนกับธนาคารกสิกรไทย (KBank Payroll) ตั้งแต่ 7 เดือนขึ้นไป <u>ไม่ต้อง</u>ยื่นเอกสารแสดงรายได้</li>\
                      </ul>',
        cardName: "document",
        cardRoleClassName: "document-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงตัวตน",
                rowSubTitle: "กรณีผู้สมัครสัญชาติไทย",
                rowBody: "<ul>\
                            <li>สำเนาบัตรประชาชน หรือ</li>\
                            <li>สำเนาบัตรประจำตัวข้าราชการ หรือ รัฐวิสาหกิจต้องแนบสำเนาทะเบียนบ้านประกอบด้วย</li>\
                          </ul>",
                rowRemark: '<p class="display-7 font-default"><strong>หมายเหตุ :</strong></p>\
                            <ol class="remark">\
                              <li>ต้องลงนามรับรองสำเนาถูกต้อง</li>\
                              <li>สำเนาบัตรต้องยังไม่หมดอายุ ณ วันสมัคร</li>\
                              <li>กรณีเปลี่ยนชื่อ-นามสกุล ต้องมีสำเนาใบเปลี่ยนชื่อ-นามสกุล</li>\
                            </ol>'
              },
              {
                rowTitle: null,
                rowSubTitle: "กรณีผู้สมัครต่างชาติ",
                rowBody: "<ul>\
                            <li>สำเนา Passport และสำเนา Visa หรือ</li>\
                            <li>สำเนา Passport และสำเนา Work Permit</li>\
                          </ul>",
                rowRemark: '<p class="display-7 font-default"><strong>หมายเหตุ :</strong></p>\
                            <ol class="remark mb-0">\
                              <li>ต้องลงนามรับรองสำเนาถูกต้อง</li>\
                              <li>สำเนาบัตร Passport Visa และ Work Permit ต้องยังไม่หมดอายุ ณ วันสมัคร</li>\
                            </ol>'
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงรายได้",
                rowSubTitle: null,
                rowBody: '<ul>\
                            <li>สลิปเงินเดือน 1 เดือน (อายุเอกสารไม่เกิน 3 เดือน) หรือ<br><a href="/SiteCollectionDocuments/kcc/img/application-details/payslip.jpg" class="link external open-popup-image pxtm-click-openPopup" title="ผู้มีรายได้ประจำ - ตัวอย่างสลิปเงินเดือน">ตัวอย่างสลิปเงินเดือน</a></li>\
                            <li>หนังสือรับรองเงินเดือน (อายุเอกสารไม่เกิน 3 เดือน)<br><a href="/SiteCollectionDocuments/kcc/img/application-details/salarycertificate.jpg" class="link external open-popup-image pxtm-click-openPopup" title="ผู้มีรายได้ประจำ - ตัวอย่างหนังสือรับรองเงินเดือน">ตัวอย่างหนังสือรับรองเงินเดือน</a></li>\
                            <li>เอกสาร 50ทวิ ปีล่าสุด<br><a href="/SiteCollectionDocuments/kcc/img/application-details/50bis.jpg" class="link external open-popup-image pxtm-click-openPopup" title="ผู้มีรายได้ประจำ - ตัวอย่างหนังสือรับรองการหักภาษี">ตัวอย่างหนังสือรับรองการหักภาษี ณ ที่จ่าย (50 ทวิ)</a></li>\
                            <li>กรณีเงินเดือนน้อยกว่าเกณฑ์รายได้ขั้นต่ำ สามารถรวมรายได้อื่น ๆ เพิ่มเติมได้ เช่น ค่าคอมมิชชั่น ค่าล่วงเวลา เป็นต้น โดยยื่นเอกสารเพิ่มเติม ดังนี้\
                              <ul>\
                                <li>Statement ย้อนหลัง 6 เดือน<br>(กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น)<br><a href="/SiteCollectionDocuments/kcc/img/application-details/statement.jpg" class="link external open-popup-image pxtm-click-openPopup" title="ผู้มีรายได้ประจำ - ตัวอย่างสำเนาการเดินบัญชี">ตัวอย่างสำเนาการเดินบัญชี (Statement)</a></li>\
                                <li>สำเนาสลิปโบนัส เฉพาะกรณีโบนัส (อายุไม่เกิน 12 เดือน)</li>\
                              </ul>\
                            </li>\
                          </ul>',
                rowRemark: null
              }
            ]
          }
        ]
      }
    ]
  },
  // เจ้าของกิจการ
  {
    tabTitle: "เจ้าของกิจการ",
    tabId: "app-detail-2",
    tabCards: [
      {
        cardTitle: "คุณสมบัติ",
        cardRemark: null,
        cardName: "qualification",
        cardRoleClassName: "qualification-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "รายได้ขั้นต่ำ (บัตรหลัก) คนไทย",
                rowSubTitle: null,
                rowBody: "<ul><li>รายได้ 15,000 บาท / เดือน ขึ้นไป</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "รายได้ขั้นต่ำ (บัตรหลัก) ต่างชาติ",
                rowSubTitle: null,
                rowBody: "<ul><li>รายได้ 50,000 บาท / เดือน ขึ้นไป</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "อายุบัตรหลัก",
                rowSubTitle: null,
                rowBody: "<ul><li>20 - 80 ปี</li></ul>",
                rowRemark: null
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "อายุบัตรเสริม",
                rowSubTitle: null,
                rowBody: "<ul><li>15 ปี</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "อายุงาน / อายุกิจการ (บัตรหลัก)",
                rowSubTitle: null,
                rowBody: "<ul><li>1 ปี</li></ul>",
                rowRemark: null
              }
            ]
          }
        ]
      },
      {
        cardTitle: "เอกสารประกอบการสมัคร",
        cardRemark: '<p class="display-7 font-default"><strong>หมายเหตุ :</strong></p>\
                      <ul class="remark">\
                        <li>กรณีเดินบัญชีกับธนาคารกสิกรไทย ตั้งแต่ 6 เดือนขึ้นไป <u>ไม่ต้อง</u>ยื่นเอกสารแสดงรายได้</li>\
                      </ul>',
        cardName: "document",
        cardRoleClassName: "document-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงตัวตน",
                rowSubTitle: null,
                rowBody: "<ul>\
                            <li>สำเนาบัตรประชาชนที่ยังไม่หมดอายุ</li>\
                            <li>หนังสือเดินทางที่ยังไม่หมดอายุ (ต่างชาติ)</li>\
                            <li>เอกสารวีซ่าที่ยังไม่หมดอายุ (ต่างชาติ)</li>\
                            <li>สำเนาใบคำขอจดทะเบียน / หนังสือจัดตั้งคณะบุคคล<br>(กรณีจดทะเบียนในนาม ห้างหุ้นส่วนสามัญ / คณะบุคคล)</li>\
                          </ul>",
                rowRemark: null
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงรายได้",
                rowSubTitle: "กรณีไม่จดทะเบียน / จดทะเบียนบุคคลธรรมดา",
                rowBody: '<ul>\
                            <li>\
                              Statement ย้อนหลัง 6 เดือน (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น) หรือ สำเนา ภ.พ.30 ย้อนหลัง 6 เดือน<br>\
                              <a href="../../../../SiteCollectionDocuments/kcc/img/application-details/statement.jpg" class="link external open-popup-image pxtm-click-openPopup" title="เจ้าของกิจการ - ตัวอย่างสำเนาการเดินบัญชี 1">ตัวอย่างสำเนาการเดินบัญชี (Statement)</a>\
                            </li>\
                          </ul>',
                rowRemark: null
              },
              {
                rowTitle: null,
                rowSubTitle: "กรณีจดทะเบียนในนามนิติบุคคล",
                rowBody: '<ul>\
                            <li>\
                              Statement ย้อนหลัง 6 เดือน (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น) หรือ สำเนา ภ.พ.30 ย้อนหลัง 6 เดือน\
                              <p class="display-7 font-default"><strong>หมายเหตุ : </strong>สามารถยื่นบัญชีตนเอง และ/หรือ บัญชีบริษัท</p>\
                              <a href="../../../../SiteCollectionDocuments/kcc/img/application-details/statement.jpg" class="link external open-popup-image pxtm-click-openPopup" title="เจ้าของกิจการ - ตัวอย่างสำเนาการเดินบัญชี 2">ตัวอย่างสำเนาการเดินบัญชี (Statement)</a>\
                            </li>\
                          </ul>',
                rowRemark: null
              },
              {
                rowTitle: null,
                rowSubTitle: "กรณีจดทะเบียนในนามห้างหุ้นส่วนสามัญ / คณะบุคคล",
                rowBody: '<ul>\
                            <li>\
                              สำเนาหนังสือจัดตั้งคณะบุคคล หรือ สำเนาคำขอจดทะเบียนห้างหุ้นส่วนสามัญฯ ห้างหุ้นส่วนสามัญนิติบุคคล (กรณีจดทะเบียน)<br>\
                              <p class="display-7 font-default"><strong>หมายเหตุ : </strong>ต้องลงนามรับรองสำเนาถูกต้อง</p>\
                            </li>\
                            <li>\
                              Statement ย้อนหลัง 6 เดือน (กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น) หรือ สำเนา ภ.พ.30 ย้อนหลัง 6 เดือน\
                              <p class="display-7 font-default"><strong>หมายเหตุ : </strong>สามารถยื่นบัญชีตนเอง และ/หรือ บัญชีบริษัท</p>\
                              <a href="../../../../SiteCollectionDocuments/kcc/img/application-details/statement.jpg" class="link external open-popup-image pxtm-click-openPopup" title="เจ้าของกิจการ - ตัวอย่างสำเนาการเดินบัญชี 3">ตัวอย่างสำเนาการเดินบัญชี (Statement)</a>\
                            </li>\
                          </ul>',
                rowRemark: null
              }
            ]
          }
        ]
      }
    ]
  },
  // ผู้ประกอบอาชีพอิสระ
  {
    tabTitle: "ผู้ประกอบอาชีพอิสระ",
    tabId: "app-detail-3",
    tabCards: [
      {
        cardTitle: "คุณสมบัติ",
        cardRemark: null,
        cardName: "qualification",
        cardRoleClassName: "qualification-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "รายได้ขั้นต่ำ (บัตรหลัก) คนไทย",
                rowSubTitle: null,
                rowBody: "<ul><li>รายได้ 15,000 บาท / เดือน ขึ้นไป</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "รายได้ขั้นต่ำ (บัตรหลัก) ต่างชาติ",
                rowSubTitle: null,
                rowBody: "<ul><li>รายได้ 50,000 บาท / เดือน ขึ้นไป</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "อายุบัตรหลัก",
                rowSubTitle: null,
                rowBody: "<ul><li>20 - 80 ปี</li></ul>",
                rowRemark: null
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "อายุบัตรเสริม",
                rowSubTitle: null,
                rowBody: "<ul><li>15 ปี</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "อายุงาน / อายุกิจการ (บัตรหลัก)",
                rowSubTitle: null,
                rowBody: "<ul><li>1 ปี</li></ul>",
                rowRemark: null
              }
            ]
          }
        ]
      },
      {
        cardTitle: "เอกสารประกอบการสมัคร",
        cardRemark: null,
        cardName: "document",
        cardRoleClassName: "document-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงตัวตน",
                rowSubTitle: null,
                rowBody: "<ul>\
                            <li>สำเนาบัตรประชาชนที่ยังไม่หมดอายุ หรือ</li>\
                            <li>หนังสือเดินทางที่ยังไม่หมดอายุ (ต่างชาติ)</li>\
                            <li>เอกสารวีซ่าที่ยังไม่หมดอายุ (ต่างชาติ)</li>\
                          </ul>",
                rowRemark: null
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงรายได้",
                rowSubTitle: null,
                rowBody: '<ul>\
                            <li>\
                              เอกสาร 50 ทวิ ปีล่าสุด หรือ กรณี 50 ทวิแบบรายเดือนใช้ย้อนหลังอย่างน้อย 6 เดือน<br><a href="../../../../SiteCollectionDocuments/kcc/img/application-details/50bis.jpg" class="link external open-popup-image pxtm-click-openPopup" title="ผู้ประกอบอาชีพอิสระ - ตัวอย่างหนังสือรับรองการหักภาษี ณ ที่จ่าย (50 ทวิ)">ตัวอย่างหนังสือรับรองการหักภาษี ณ ที่จ่าย (50 ทวิ)</a>\
                            </li>\
                          </ul>',
                rowRemark: null
              }
            ]
          }
        ]
      }
    ]
  },
  // ผู้มีเงินออม
  {
    tabTitle: "ผู้มีเงินออม",
    tabId: "app-detail-4",
    tabCards: [
      {
        cardTitle: "คุณสมบัติ",
        cardRemark: null,
        cardName: "qualification",
        cardRoleClassName: "qualification-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "อายุบัตรหลัก",
                rowSubTitle: null,
                rowBody: "<ul><li>20 - 80 ปี</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "อายุบัตรเสริม",
                rowSubTitle: null,
                rowBody: "<ul><li>15 ปี</li></ul>",
                rowRemark: null
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "คุณสมบัติอื่น",
                rowSubTitle: null,
                rowBody: "<ul>\
                            <li>ต้องมีเงินฝากออมทรัพย์และหรือเงินฝากประจำ 1,000,000 บาท ไม่น้อยกว่า 6 เดือน</li>\
                            <li>ต้องมีเงินฝากประจำและหรือเงินฝากออมทรัพย์ 2,000,000 บาท ไม่น้อยกว่า 12 เดือน (ต่างชาติ)</li>\
                            <li>ต้องระบุลักษณะอาชีพ : พ่อบ้าน / แม่บ้าน</li>\
                          </ul>",
                rowRemark: null
              }
            ]
          }
        ]
      },
      {
        cardTitle: "เอกสารประกอบการสมัคร",
        cardRemark: '<p class="display-7 font-default"><strong>หมายเหตุ :</strong></p>\
                      <ul class="remark">\
                        <li>กรณีเดินบัญชีกับธนาคารกสิกรไทย ตั้งแต่ 6 เดือนขึ้นไป <u>ไม่ต้อง</u>ยื่นเอกสารแสดงรายได้</li>\
                      </ul>',
        cardName: "document",
        cardRoleClassName: "document-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงตัวตน",
                rowSubTitle: null,
                rowBody: "<ul>\
                            <li>สำเนาบัตรประชาชนที่ยังไม่หมดอายุ</li>\
                            <li>หนังสือเดินทางที่ยังไม่หมดอายุ (ต่างชาติ)</li>\
                            <li>เอกสารวีซ่าที่ยังไม่หมดอายุ (ต่างชาติ)</li>\
                          </ul>",
                rowRemark: null
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงรายได้",
                rowSubTitle: null,
                rowBody: '<ul>\
                            <li>Statement บัญชีเงินฝาก / เงินลงทุนย้อนหลัง 6 เดือน (กรณีสัญชาติไทย)</li>\
                            <li>Statement บัญชีเงินฝาก / เงินลงทุนย้อนหลัง 12 เดือน (กรณีชาวต่างชาติ)</li>\
                          </ul>',
                rowRemark: '<p class="display-7 font-default"><strong>หมายเหตุ : </strong>กรณีเป็นบัญชีธนาคารกสิกรไทยไม่ต้องยื่น</p>'
              }
            ]
          }
        ]
      }
    ]
  },
  // ผู้ใช้บัญชีเงินค้ำประกัน
  {
    tabTitle: "ผู้ใช้บัญชีเงินค้ำประกัน",
    tabId: "app-detail-5",
    tabCards: [
      {
        cardTitle: "คุณสมบัติ",
        cardRemark: null,
        cardName: "qualification",
        cardRoleClassName: "qualification-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "อายุบัตรหลัก",
                rowSubTitle: null,
                rowBody: "<ul><li>20 - 80 ปี</li></ul>",
                rowRemark: null
              },
              {
                rowTitle: "อายุบัตรเสริม",
                rowSubTitle: null,
                rowBody: "<ul><li>15 ปี</li></ul>",
                rowRemark: null
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "คุณสมบัติอื่น",
                rowSubTitle: null,
                rowBody: "<ul>\
                            <li>ต้องมีเงินฝากออมทรัพย์และ/หรือเงินฝากประจำค้ำประกัน 15,000 บาทขึ้นไป</li>\
                          </ul>",
                rowRemark: null
              }
            ]
          }
        ]
      },
      {
        cardTitle: "เอกสารประกอบการสมัคร",
        cardRemark: null,
        cardName: "document",
        cardRoleClassName: "document-content",
        cardCols: [
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงตัวตน",
                rowSubTitle: null,
                rowBody: "<ul>\
                            <li>สำเนาบัตรประชาชนที่ยังไม่หมดอายุ</li>\
                            <li>หนังสือเดินทางที่ยังไม่หมดอายุ (ต่างชาติ)</li>\
                            <li>เอกสารวีซ่าที่ยังไม่หมดอายุ (ต่างชาติ)</li>\
                          </ul>",
                rowRemark: null
              }
            ]
          },
          {
            rows: [
              {
                rowTitle: "เอกสารแสดงรายได้",
                rowSubTitle: null,
                rowBody: '<ul>\
                            <li>สำเนาสมุดบัญชีเงินฝากประจำ / ออมทรัพย์ ธนาคารกสิกรไทยที่จะนำมาเป็นหลักประกัน</li>\
                            <li>สัญญาจำนำสิทธิ์บัญชีเงินฝาก</li>\
                          </ul>',
                rowRemark: null
              }
            ]
          }
        ]
      }
    ]
  }
]