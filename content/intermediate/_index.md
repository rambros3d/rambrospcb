+++
title = "Intermediate Series"
description = "Design a circuit from scratch, create custom footprints, read datasheets, and route a 4-layer PCB in EasyEDA Pro."
+++

Take your PCB design skills to the next level. In this series, you will stop copying reference schematics and learn how to design a complete board from scratch—starting from requirements and datasheets all the way to a 4-layer PCB layout.

![Intermediate PCB Tutorial Thumbnail](intermediate-thumbnail.webp)

> **Full Playlist:** [Intermediate Series - PCB Design தமிழ் (5 Videos, ~84 mins)](https://www.youtube.com/playlist?list=PLZzWPN5JrAkE)

## What You’ll Learn

* Designing a circuit from scratch (defining requirements & selecting components)
* Creating custom schematic symbols and PCB footprints in EasyEDA Pro
* Reading component datasheets to extract pinouts, typical application circuits, and package dimensions
* Interfacing a microcontroller with sensors and building a clean schematic
* 4-layer PCB stackup setup, layout, and routing

## Requirements

Before starting this series, make sure you have:

* Completed the [Beginner Series](/beginner/) (or are already comfortable with EasyEDA Pro basics, layout, routing, and DRC)
* EasyEDA Pro installed and activated
* Basic familiarity with microcontrollers, power rails, and common communication buses (e.g., I2C / SPI / UART)

---

## Part 1: Project Requirements & Component Selection

Decide what the board needs to do and pick the right parts before opening the schematic editor.

<!-- Replace with the exact YouTube embed shortcode/iframe used in content/beginner/index.md -->
{{ youtube(id="r23DOtWClJg") }}

[Watch Part 1 on YouTube (09:18)](https://www.youtube.com/watch?v=r23DOtWClJg)

### Practice Exercise

1. Write down clear functional requirements for your board (power source, microcontroller, sensors/peripherals, and form factor)
2. Search for assembly-ready parts on [JLCPCB Parts](https://jlcpcb.com/parts) or [LCSC](https://www.lcsc.com/)
3. Compare Basic vs. Extended parts, stock levels, and pricing to finalize your Bill of Materials (BOM)
4. <!-- TODO: Add any Part 1 specific project milestone (e.g., exact MCU/sensor chosen in #I1) -->


---

## Part 2: Creating Custom Symbols & Footprints

What to do when a component you want isn't available in the default EasyEDA library—or when you shouldn't trust a user-contributed footprint.

{{ youtube(id="6tbi0laZXFk") }}

[Watch Part 2 on YouTube (16:47)](https://www.youtube.com/watch?v=6tbi0laZXFk)

### Practice Exercise

1. Open the component datasheet and locate the **Pin Configuration** and **Recommended Land Pattern / Package Dimensions**
2. Create a new **Schematic Symbol** in EasyEDA Pro with clear pin numbers, names, and electrical types
3. Create a matching **PCB Footprint** using exact datasheet dimensions (pad size, pitch, pin-1 indicator, and courtyard/silkscreen)
4. Link the Symbol and Footprint into a single reusable component and double-check pin-to-pad mapping
5. <!-- TODO: Specify the exact component built in #I2 -->


---

## Part 3: How to Read a Datasheet

Stop guessing pin connections and capacitor values—learn how to pull the exact engineering details you need from a datasheet in minutes.

{{ youtube(id="6E5bZNGPjsY") }}

[Watch Part 3 on YouTube (12:24)](https://www.youtube.com/watch?v=6E5bZNGPjsY)

### Practice Exercise

1. Check **Absolute Maximum Ratings** and **Recommended Operating Conditions** (supply voltage, logic levels, current limits)
2. Review the **Pin Description** table to identify power, ground, communication, and strap/configuration pins
3. Find the **Typical Application Circuit** and note required passive components (decoupling capacitors, pull-up resistors, etc.)
4. Check layout guidelines and thermal/mechanical notes before moving to schematic capture


---

## Part 4: Schematic Design & Microcontroller–Sensor Interface

Turn your datasheet notes and selected parts into a clean, readable, and error-free schematic.

{{ youtube(id="WmGZVxGxqLo") }}

[Watch Part 4 on YouTube (12:15)](https://www.youtube.com/watch?v=WmGZVxGxqLo)

### Practice Exercise

1. Place your microcontroller, power circuitry, connectors, and sensor components into the EasyEDA Pro schematic
2. Wire power rails, decoupling capacitors, and microcontroller-to-sensor interfaces using clear net labels
3. Add No-Connect (`X`) flags to unused pins and verify all component values and JLC/LCSC part numbers
4. Run an **Electrical Rule Check (ERC)** and resolve any warnings before converting to PCB
5. <!-- TODO: Add any Part 4 specific step or sub-circuit covered in #I4 -->


---

## Part 5: 4-Layer PCB Layout, Routing & Verification

Bring the full board together using a 4-layer stackup, clean component placement, power/ground planes, and pre-fabrication checks.

{{ youtube(id="ucn75gkpnms") }}

[Watch Part 5 on YouTube (33:42)](https://www.youtube.com/watch?v=ucn75gkpnms)

### Practice Exercise

1. Convert the schematic to PCB and configure the **4-layer stackup** (signal, ground, and power layers)
2. Define the board outline, mounting holes/connectors, and place components logically (keeping decoupling caps close to IC power pins)
3. Route signal traces cleanly, stitch ground vias where needed, and configure copper planes/pours
4. Add clean silkscreen labels, inspect the board in **3D Preview**, and run a full **Design Rule Check (DRC)**
5. Export / one-click order on JLCPCB and verify BOM & component placement (CPL) before checkout
6. <!-- TODO: Add any Part 5 specific layout detail (e.g., exact board dimensions/stackup order from #I5) -->


---

## Order Your Board & Ask Doubts

Once your DRC passes cleanly, order your board and test real hardware—your skills level up with every board you actually build.

<!-- Reuse your JLCPCB $15 coupon image + link from content/beginner/index.md -->
<!-- [![$15 JLCPCB Coupon](jlcpcb-coupon.webp)](YOUR_COUPON_URL) -->

### Notes

* Use my **SPECIAL coupon** (same as the [Beginner Series](/beginner/#part-4-order-the-board)) to get a discount on JLCPCB.
* Select **EPOST** or **Registered Air Mail** for budget-friendly shipping to India, and keep customs duties in mind.
* Have a doubt? Drop it in the **YouTube comments** or ask in our **Telegram Group** (check the [FAQ](/faq/) for the invite link—please avoid DMs for PCB doubts).
* Ready for more? Check out the **Advanced Series** on [YouTube](https://www.youtube.com/playlist?list=PLXfXtnovm_eE)!