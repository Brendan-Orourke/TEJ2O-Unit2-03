/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: Sep 2025
 * This program calculates area and perimeter
 */


basic.forever (function (){
     const length  = 5
     const width = 3
     const area = length * width
     const perimeter = 2 * (length + width)
    basic.showString("A=")
    basic.showNumber(area)
    basic.pause(500)
    basic.showString("P=")
    basic.showNumber(perimeter)
    basic.pause(500) })