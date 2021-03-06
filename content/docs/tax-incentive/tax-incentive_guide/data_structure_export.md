---
title: โครงสร้างข้อมูลใบขนสินค้าขาออก
weight: 1
bookFlatSection: true
bookToc: true
---

โครงสร้างข้อมูลใบขนสินค้าขาออกโอนย้ายภายในประเทศ   
===

## โครงสร้างข้อมูลใบขนสินค้าขาออกโอนย้ายภายในประเทศ แบ่งได้เป็น 6 ส่วนดังนี้

1. [**Export Declaration Control**](#export-declaration-control)	ประกอบด้วย	70 Fields
2. [**Export Invoice Control**](#export-invoice-control)	ประกอบด้วย	35 Fields
3. [**Export Invoice Detail**](#export-invoice-detail)	ประกอบด้วย	73 Fields
4. [**Export Invoice Detail (Duty)**](#export-invoice-duty)	ประกอบด้วย	12 Fields
5. [**Export Invoice Detail (Permit)**](#export-invoice-permit)	ประกอบด้วย	 4 Fields
6. [**Export Invoice Detail (Deposit)**](#export-invoice-deposit)	ประกอบด้วย	 2 Fields

## เงื่อนไขการบันทึกข้อมูล ในกรณีผู้บันทึกไม่สามารถหาข้อมูลได้

1. หาก Field ใด กำหนดให้ต้องระบุค่า **(Value = M)** แต่ผู้บันทึกไม่สามารถหาข้อมูลได้
- สำหรับ Field ที่เป็น Alphabet (แสดงออกเป็นตัวอักษร) ให้ระบุค่าเป็น N/A 
- สำหรับ Field ที่เป็น Numeric (แสดงออกเป็นตัวเลข) ให้ระบุค่าเป็น 0 (ศูนย์)
2. หาก Field ใด กำหนดให้ไม่ต้องระบุค่า **(Value = O)** และผู้บันทึกไม่สามารถหาข้อมูลได้ ก็ไม่ต้องบันทึกค่าใด ๆ 
3. หาก Field ใด กำหนดให้ต้องระบุค่า เมื่อเข้าเงื่อนไขที่กำหนด **(Value = C)** แต่ผู้บันทึกไม่สามารถหาข้อมูลได้
- สำหรับ Field ที่เป็น Alphabet (แสดงออกเป็นตัวอักษร) ให้ระบุค่าเป็น N/A 
-  สำหรับ Field ที่เป็น Numeric (แสดงออกเป็นตัวเลข) ให้ระบุค่าเป็น 0 (ศูนย์)
	
## อักษรย่อ ที่ใช้ในการอธิบายรูปแบบชนิดของข้อมูล

|  อักษรย่อ   |	คำอธิบาย  |
|:------------:|----------------------------|
|n3 |ข้อมูลชนิดตัวเลข (Numeric Characters) คงที่ คือ 3 ตัวอักษร|
|a3  |	ข้อมูลชนิดตัวอักษร (Alphabetic Characters) คงที่ คือ 3 ตัวอักษร|
|an3  |	ข้อมูลชนิดตัวอักษรหรือตัวเลข คงที่ คือ 3 ตัวอักษร|
|n..3|	ข้อมูลชนิดตัวเลขความยาวข้อมูลแปรผันตามความยาวสูงสุด 3 ตัวอักษร|
|a..3|	ข้อมูลชนิดตัวอักษรความยาวข้อมูลแปรผันตามความยาวสูงสุด 3 ตัวอักษร|
|an..3  |	ข้อมูลชนิดตัวอักษรหรือตัวเลขความยาวข้อมูลแปรผันตามความยาวสูงสุด 3 ตัวอักษร|
|n..16,2|ข้อมูลชนิดตัวเลขความยาวข้อมูลแปรผันตามความยาวสูงสุด 16 ตัวอักษรรวมความยาวทศนิยมสูงสุด 2 ตัวอักษร|




### Export Declaration Control 

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page5.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page6.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page7.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page8.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page9.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page10.jpg)


![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page11.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page12.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page13.jpg)


![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page14.jpg)


![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page15.jpg)



### Export Invoice Control

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page16.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page17.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page18.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page19.jpg)


### Export Invoice Detail

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page20.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page21.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page22.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page23.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page24.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page25.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page26.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page27.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page28.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page29-1.jpg)



### Export Invoice Duty

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page29-2.jpg)

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page30.jpg)

### Export Invoice Permit

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page31.jpg)


### Export Invoice Deposit

![](https://github.com/ecs-support/knowledge-center/raw/master/img/e-tax-incentive/e-tax-incentivejpg_Page32.jpg)