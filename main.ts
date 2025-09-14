/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Brendan O'Rourke
 * Created on: Sep 2025
 * This program calculates area and perimeter
 */

let length = 5
let width = 3

// Calculate area and perimeter
let area = length * width
let perimeter = 2 * (length + width)

// Display the results on the LED screen
basic.showString("A:")
basic.showNumber(area)
basic.pause(1000)

basic.showString("P:")
basic.showNumber(perimeter);