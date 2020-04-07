---
weight: 13
bookFlatSection: true
title: หลักการรวมรายการสินค้า
bookToc: false
---

# หลักการรวมรายการของบัญชีราคาสินค้า

1. **เลขที่บัญชีราคาสินค้า (Invoice  Number)** ให้ระบุค่าตามจริง กรณีการนำเข้าไม่หมดในครั้งเดียวสามารถใช้เลขที่บัญชีราคาสินค้า ในใบขนสินค้าขาเข้าซ้ำได้อีก

2. **ลำดับรายการในบัญชีราคาสินค้า  (Invoice Item Number)** ให้ระบุค่าตามจริง
	- เพื่อเป็นการแจ้งว่ารายการในใบขนสินค้าขาเข้ารายการนี้มาจาก Invoice Number และ Invoice Item Number ใด
	- ในแต่ละรายการของใบขนสินค้าขาเข้าสามารถใช้ Invoice Number และ Invoice Item Number ซ้ำกันได้ เช่น กรณีใช้สิทธิ BOI, ใช้สิทธิตามมาตรา 29, สุทธินำกลับ

### หลักการรวมเอกสาร Invoice เป็นข้อมูล Import Declaration Detail

1. สามารถบันทึกข้อมูลรายละเอียดใบขนสินค้าจัดกลุ่มรายการตาม*พิกัดศุลกากร (Tariff Code) และรหัสสถิติสินค้า (Statistical Code)* **เดียวกัน**รวมกันได้ภายใต้เงื่อนไข ดังนี้

   - **ชนิดของภาษาอังกฤษ** (English Description of Goods) และ**ชนิดของภาษาไทย**  (Thai Description of Goods) **เดียวกัน** และ
   - **ราคาต่อหน่วยเงินต่างประเทศ** (Unit Price Foreign) และ**ราคาต่อหน่วยเงินบาท** (Unit Price Baht) **เท่ากัน** และ
   - **รหัสสกุลเงินตรา (Currency)** ตามมาตรฐาน ISO ของแต่ละรายการ**เหมือนกัน** และ
   - **รหัสประเทศกำเนิด (Origin Country)** ตามมาตรฐาน ISO **เดียวกัน** และ
   - **ปีที่ผลิตสินค้า (Product Year)** **เดียวกัน** และ
   - **พิกัดสรรพสามิต** (Excise No) รวมถึง**ปริมาณที่ใช้ในการคำนวณภาษีสรรพสามิต** (Excise Quantity) และ**หน่วยของปริมาณ** (Excise Quantity Unit) ตามมาตรฐาน ISO **เดียวกัน**
   - มี**รหัสสิทธิพิเศษ (Privilege Code)** **เดียวกัน** และมี**ประเภทของข้อมูล** (Nature of Transaction) **เดียวกัน** เช่น 11 = เป็นการค้า , 21 = เป็นของแถม/ไม่มีมูลค่าทางการค้า , 90 = รับจ้างทำของ  เป็นต้น
  
2. ในการจัดทำข้อมูลใบขนสินค้าขาเข้าให้แยกรายการของในส่วน Import Declaration Detail แม้ตามบัญชีราคาสินค้าจะมี Invoice Item Number ซ้ำกัน ในกรณีใช้สิทธิทางภาษีอากรต่างกัน ดังนี้

   - เป็นรายการ**สุทธินำกลับ** (Re- Importation Certificate)
   - เป็นรายการใช้สิทธิ**ส่งเสริมการลงทุน (BOI)**
   - เป็นรายการใช้สิทธิ**คลังสินค้าทัณฑ์บน (BOND)**
   - เป็นรายการใช้สิทธิ**ขอคืนอากรตามมาตรา 29**
   - เป็นรายการใช้สิทธิ**ส่งกลับไปยังต่างประเทศเพื่อขอคืนอากรตามมาตรา 28 (Re-Export)**
   - เป็นการใช้สิทธิ**เขตปลอดอากร (Free Zone : FZ)**
   - เป็นการใช้สิทธิ**เขตประกอบการเสรี (I-EA-T FREEZONE)**
   - เป็นรายการขออนุมัติ**ใบขนสินค้าหลายเที่ยวเรือ (Several)**
   - การใช้สิทธิประโยชน์ **การใช้สิทธิยกเว้นอากร ในกรณีอื่น ๆ (ถ้ามี)**

3. หากมี**_เลขที่ใบขนสินค้าที่อ้างถึง_ (Reference Declaration Number) และ_รายการในใบขนสินค้าที่อ้างถึง_ (Reference Declaration Line Number) _ต่างกัน_** ให้**_แยกรายการของในส่วน Import Declaration Detail_ ด้วย**


{{< hint danger>}}
**4. กรณีสินค้าที่นำเข้าเป็น _รถยนต์ เหล้า บุหรี่ ไวน์ ห้ามรวมรายการ_**  

{{< /hint >}}