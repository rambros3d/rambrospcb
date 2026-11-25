+++
title = "Advanced Series"
description = "Design a production-ready 4-layer ESP32-S3 hardware product (RK-ULTRA) from requirements and schematic architecture to custom stackups, impedance control, and DFM/DFA/DFT."

[extra]
katex = true
+++

Move beyond hobby breakout boards and learn how commercial hardware is engineered for real batch manufacturing. Across six episodes, we design **RK-ULTRA**—a compact, 4-layer, multi-function RC scale-model controller built from scratch for real-world kit production.

Instead of repeating basic EDA clicks from the earlier tracks, this series focuses on **engineering trade-offs**: architecture decisions, power-rail safety, stackup cost optimization, late pin assignment, mid-design ECOs, and factory DFM/DFA/DFT checks.

> **Full Playlist:** [Advanced Series - PCB Design தமிழ் (6 Videos, 2 hrs 04 mins)](https://www.youtube.com/playlist?list=PLXfXtnovm_eE)

## Project Overview: RK-ULTRA

| Parameter | Specification |
| --- | --- |
| **Board Dimensions** | $100 \times 36\text{ mm}$, 4-layer PCB ($M3$ mounting holes) |
| **MCU** | `ESP32-S3-MINI` (with external antenna support) |
| **Power Input** | 2S–4S Li-ion ($6\text{--}18\text{ V}$) with firmware-controlled high-side power latching |
| **Power Architecture** | 3 rails (`PWR`, $5\text{ V}/7\text{ A}$ buck via `TPS51385`, $3.3\text{ V}$ LDO with dual-diode `VBUS`/`5V` OR-ing) + ESC power output |
| **Actuators & Lighting** | $2 \times 2\text{ A}$ DC motor H-bridges (`IPROP` + back-EMF sensing), $10 \times$ LEDs (`AW9523B` + $200\text{ mA}$ dual N-FET upgrade), $8 \times$ servo outputs |
| **Sensors & Audio** | SPI IMU (`LSM6DSVTR`), BGA I2S audio amplifier (`MAX98357A`) |
| **Custom 4-Layer Stackup** | `Signal (1 oz)` / `GND (0.5 oz)` / `Signal (0.5 oz)` / `Power (1 oz)` |

## What You’ll Learn

* Translating product benchmarks and user needs into concrete electrical and mechanical system requirements
* Designing robust power, motor-driver, LED, audio, and MCU sub-circuits while catching subtle datasheet traps
* Optimizing 4-layer copper weight and stackup order for high-current rails without inflating PCB fabrication cost
* Handling live mid-design Engineering Change Orders (ECOs) and connector poka-yoke (mistake-proofing)
* Using the `ESP32-S3` GPIO Matrix for late pin assignment, iterative pin swapping, and clean bus routing
* Preparing boards for batch assembly with ERC, Device Standardization, $90\ \Omega$ USB impedance control, panelization, fiducials, and DFT economics

## Requirements

Before starting this series, make sure you have:

* Completed the [Beginner Series](/beginner/) and [Intermediate Series](/intermediate/) (or already have hands-on experience with EasyEDA Pro, datasheets, and 4-layer boards)
* Comfort reading IC datasheets, MOSFET switching circuits, and basic power-electronics concepts
* EasyEDA Pro installed and updated

---

## Part 1: Product Benchmarking & System Requirements

Every production board starts with understanding the product and its constraints before placing a single component.

{{ youtube(id="7d6ogSrp5GI") }}

[Watch Part 1 on YouTube (05:12)](https://www.youtube.com/watch?v=7d6ogSrp5GI)

### Key Concepts & Practice Checklist

1. Benchmark existing products in your category (RC cars, drift chassis, excavators, Tamiya MFCU) to identify pain points and missing features
2. Draft a clear system-requirements document covering input voltage range ($6\text{--}18\text{ V}$), current budgets, and power rails
3. List all I/O interfaces early: $2 \times 2\text{ A}$ DC motors, $8 \times$ servos, $10 \times$ LEDs, SPI IMU, I2S audio, and USB-C
4. Define mechanical constraints (target enclosure envelope, connector accessibility, and mounting holes) before opening the schematic editor

---

## Part 2: Circuit Architecture & Schematic Rationale

Walk through the complete RK-ULTRA schematic block by block and learn the engineering *why* behind each component choice and protection circuit.

{{ youtube(id="ZALP483OWjY") }}

[Watch Part 2 on YouTube (19:01)](https://www.youtube.com/watch?v=ZALP483OWjY)

### Key Concepts & Practice Checklist

1. Evaluate **module vs. bare IC** trade-offs (`ESP32-S3-MINI`, RF certification, external antenna options) and verify USB-C $5.1\text{ k}\Omega$ CC pull-down resistors
2. Review peripheral integration: SPI IMU (`LSM6DSVTR`), BGA I2S amplifier (`MAX98357AEWL+T`), and `AW9523BTQR` LED driver (checking default power-on states to prevent LED burnout on boot)
3. Understand motor feedback sensing (`IPROP` current mirror and back-EMF voltage divider scaled safely from $18\text{ V}$ max input into a $3.3\text{ V}$ ADC)
4. Protect the $5\text{ V}/7\text{ A}$ buck converter (`TPS51385RJNR`) by clamping the `EN` pin with a $3.3\text{ V}$ Zener (`MM5Z3V3`) so it never exceeds its $6\text{ V}$ absolute maximum rating
5. Design dual-diode `VBUS`/`5V` OR-ing into the $3.3\text{ V}$ LDO and a high-side P-FET / N-FET (`2N7002KDW`) firmware-controlled power-latching circuit

### Quick Reference: Key Design Checks

* **Back-EMF Divider Scaling:** Keep maximum divider output strictly within the MCU ADC range:
  $$V_{\text{ADC}} = V_{\text{in,max}} \cdot \frac{R_{\text{bot}}}{R_{\text{top}} + R_{\text{bot}}} \le 3.3\text{ V}$$
* **Buck `EN` Pin Protection:** Whenever enabling a wide-input regulator directly from a 2S–4S battery ($V_{\text{bat}} \le 18\text{ V}$), verify $V_{\text{EN,abs-max}}$ in the datasheet and add a series resistor + Zener clamp if needed.

---

## Part 3: Board Outline, Modular Placement & Layout Reuse

Set up a 4-layer board around real mechanical constraints, place user-facing connectors first, and speed up dense layouts using EasyEDA Pro's reuse tools.

{{ youtube(id="_hCIhK3N5vA") }}

[Watch Part 3 on YouTube (21:06)](https://www.youtube.com/watch?v=_hCIhK3N5vA)

### Key Concepts & Practice Checklist

1. Configure 4-layer board rules to match JLCPCB manufacturing capabilities
2. Draw the $100 \times 36\text{ mm}$ board outline, place $M3$ mounting holes, and lock all user-facing connectors to their mechanical edges first
3. Use **Cross Probe** (`Shift+X`) and alignment hotkeys to group sub-circuits logically before routing
4. Keep the `TPS51385` buck switching node as tight and compact as possible to minimize EMI and parasitic inductance
5. Use **Layout Reuse** to replicate repeated circuit blocks consistently, hide 3D models on DNP headers for cleaner mechanical inspection, and enforce RF antenna keep-out zones

---

## Part 4: Custom 4-Layer Stackup, Sub-Circuit Routing & Live ECO

Learn when to break textbook rules—swapping layers for heavier copper—and how to execute a clean mid-layout Engineering Change Order (ECO).

{{ youtube(id="GVU-kVQBOI8") }}

[Watch Part 4 on YouTube (21:48)](https://www.youtube.com/watch?v=GVU-kVQBOI8)

### Key Concepts & Practice Checklist

1. Swap the textbook `Signal / GND / Power / Signal` stackup to **`Signal / GND / Signal / Power`** so high-current rails use thicker $1\text{ oz}$ outer copper instead of paying extra for $1\text{ oz}$ inner layers ($0.5\text{ oz}$ standard)
2. Route critical sub-circuits cleanly before connecting global buses
3. Manage overlapping copper zones cleanly using EasyEDA Pro's **Copper Pour Priority Manager** and auto-rebuild settings
4. Execute a live mid-design **ECO**: upgrade two LED channels to $200\text{ mA}$ using `ES3134KZ` dual N-FETs
5. Apply physical mistake-proofing (poka-yoke) by using distinct connector pitches ($2.0\text{ mm}$ vs. $1.25\text{ mm}$) so high-current headlight ports cannot be plugged into standard LED headers

---

## Part 5: Late Pin Assignment, Bus Routing & Power Planes

Let the PCB layout drive your microcontroller pinout instead of fighting a tangled ratnest.

{{ youtube(id="BPHwUG5oa1M") }}

[Watch Part 5 on YouTube (23:17)](https://www.youtube.com/watch?v=BPHwUG5oa1M)

### Key Concepts & Practice Checklist

1. Use the **`ESP32-S3` GPIO Matrix** for late pin assignment, iteratively swapping pins between schematic and PCB to uncross ratlines
2. Reserve **`ADC1`** pins for analog sensing and avoid **`ADC2`** when Wi-Fi or BLE is active
3. Speed up multi-line interfaces with **Multiple Routing**
4. Snap critical sensor coordinates to clean mechanical numbers (e.g., IMU placed at $(26\text{ mm}, 9\text{ mm})$) so mechanical/firmware teams know exact offsets
5. Swap connectors cleanly when layout demands it (e.g., 6-pin header `22284060`), size power vias conservatively ($\approx 1.5\text{ A}$ per via), and finish full `3V3`, `5V`, `PWR`, and `GND` plane routing

---

## Part 6: Production DFM, DFA, Impedance Control & DFT

Turn a routed PCB into a repeatable, manufacturable product—and learn when advanced rules actually matter versus when they only add cost.

{{ youtube(id="U8u7NVVAOkY") }}

[Watch Part 6 on YouTube (33:18)](https://www.youtube.com/watch?v=U8u7NVVAOkY)

### Key Concepts & Practice Checklist

1. **Schematic Hygiene:** Run **ERC**, apply **Device Standardization**, and re-annotate component designators cleanly for BOM/CPL production files
2. **Signal Integrity & Current:** Check crosstalk spacing, via drill limits, IPC-2221 trace current capacity, SPI length matching (and when speeds justify it), and $90\ \Omega$ USB coplanar differential-pair routing (`Alt+D` arc routing)
3. **Mechanical & Fabrication (DFM):** Eliminate copper voids, balance copper distribution to reduce board warpage, add $2\text{ mm}$ CNC corner radii, and stitch ground planes with vias every $3\text{ mm}$
4. **Assembly & Panelization (DFA):** Add edge rails, $1\text{ mm}$ / $2\text{ mm}$ fiducials, evaluate $0.6\text{ mm}$ mouse bites vs. V-cut, watch component centre-of-gravity overhangs, and factor in double-sided reflow fixture costs
5. **Testing Economics (DFT):** Compare flying-probe vs. ICT bed-of-nails test fixtures (e.g., weighing a $\$250$ fixture against a $200$-unit batch at $\approx 0.5\%$ defect rate versus mandatory ICT for high-volume consumer products)
6. **Final Polish:** Clean up overlapping footprint silkscreen labels and run a final DRC before exporting production Gerbers, BOM, and CPL

---

## Manufacturing, Testing & Ask Doubts

Once your DFM, DFA, and DRC checks pass, order a small prototype run (5–10 boards), validate every power rail and interface on the bench, and lock your revision before moving to batch production.

### Notes

* Have a design or manufacturing question? Drop it in the **YouTube comments** or ask in our [**Telegram Group**](https://t.me/rambrospcb) (see the [FAQ](/faq/) for the invite link—please avoid DMs for PCB doubts).