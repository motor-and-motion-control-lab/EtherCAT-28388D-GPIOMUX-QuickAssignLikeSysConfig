import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Upload, FileJson, FileText, ZoomIn, ZoomOut, Move, RefreshCw, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

/**
 * DEFAULT DATA CONSTANTS
 * Embedded from the user's provided files to ensure immediate functionality.
 */

const DEFAULT_SCHEMATIC_CONTENT = `(kicad_sch
	(version 20250114)
	(generator "eeschema")
	(generator_version "9.0")
	(uuid "88c87a56-bf0e-49aa-812f-d0846700c8ff")
	(paper "A1")
	(lib_symbols)
	(wire
		(pts
			(xy 299.72 139.7) (xy 330.2 139.7)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "0ee23439-9984-4d5e-97ac-4b6520298959")
	)
	(wire
		(pts
			(xy 299.72 128.27) (xy 330.2 128.27)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "10966525-cdfb-4496-b0da-f6c682e5f76a")
	)
	(wire
		(pts
			(xy 299.72 111.76) (xy 330.2 111.76)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "18544cab-bb01-44d4-8aa8-f842c49b6dd0")
	)
	(wire
		(pts
			(xy 299.72 96.52) (xy 330.2 96.52)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "1ccdf177-e987-483d-87c8-173226e0877c")
	)
	(wire
		(pts
			(xy 299.72 187.96) (xy 331.47 187.96)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "2327575d-2c7c-4338-b122-40cc7e06c08e")
	)
	(wire
		(pts
			(xy 299.72 100.33) (xy 330.2 100.33)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "2d9d575d-72c9-48e3-82a5-224191e47f11")
	)
	(wire
		(pts
			(xy 299.72 191.77) (xy 331.47 191.77)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "35409e09-0002-4b60-84ca-0309361d6bd9")
	)
	(wire
		(pts
			(xy 299.72 144.78) (xy 331.47 144.78)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "5b07ea15-a437-4745-a65d-f62a64f589c6")
	)
	(wire
		(pts
			(xy 299.72 152.4) (xy 331.47 152.4)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "6395be07-dcee-4280-b23d-6202e18f73ff")
	)
	(wire
		(pts
			(xy 299.72 168.91) (xy 331.47 168.91)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "6965e62b-80eb-4d7c-a862-4768f3082962")
	)
	(wire
		(pts
			(xy 299.72 92.71) (xy 330.2 92.71)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "8a1515f4-5abb-4245-a57e-93ba227e4081")
	)
	(wire
		(pts
			(xy 299.72 160.02) (xy 331.47 160.02)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "8e882cfd-1811-4ba8-a293-0baebf6d14c1")
	)
	(wire
		(pts
			(xy 299.72 107.95) (xy 330.2 107.95)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "9099f725-71e3-4906-98fa-c59813a8e2b6")
	)
	(wire
		(pts
			(xy 299.72 172.72) (xy 331.47 172.72)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "9a83cff5-075c-43e7-a407-53f278b6b66b")
	)
	(wire
		(pts
			(xy 299.72 135.89) (xy 330.2 135.89)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "a23f46fd-511b-4dea-822d-ff808e185b8e")
	)
	(wire
		(pts
			(xy 299.72 163.83) (xy 331.47 163.83)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "ac211dea-e1f5-4eeb-b99e-0e05cb7847b3")
	)
	(wire
		(pts
			(xy 299.72 124.46) (xy 330.2 124.46)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "afb19c09-7b9c-4d75-9827-0797aabe4abb")
	)
	(wire
		(pts
			(xy 299.72 156.21) (xy 331.47 156.21)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "b9e36060-971a-40f7-9810-b701ac1f22b9")
	)
	(wire
		(pts
			(xy 299.72 132.08) (xy 330.2 132.08)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "cc2dbbfc-5114-4e93-b49d-6ab8ae5f10c6")
	)
	(wire
		(pts
			(xy 299.72 176.53) (xy 331.47 176.53)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "d9e305df-93a7-4794-9644-06e56c1254d9")
	)
	(wire
		(pts
			(xy 299.72 184.15) (xy 331.47 184.15)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "da1d3090-e24d-44f2-8aac-f6c8fd67b245")
	)
	(wire
		(pts
			(xy 299.72 120.65) (xy 330.2 120.65)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "db53432e-ca13-43bd-9f84-dad60d4d9aec")
	)
	(wire
		(pts
			(xy 299.72 180.34) (xy 331.47 180.34)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "db83398a-8653-496f-97fb-195b8439f650")
	)
	(wire
		(pts
			(xy 299.72 104.14) (xy 330.2 104.14)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "dcbfa5b1-10e7-4258-bbb7-3062d17fd157")
	)
	(wire
		(pts
			(xy 299.72 148.59) (xy 331.47 148.59)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "e547901d-ff3f-4a3c-99cb-a7e619597a7c")
	)
	(wire
		(pts
			(xy 299.72 116.84) (xy 330.2 116.84)
		)
		(stroke
			(width 0)
			(type default)
		)
		(uuid "f1ce7409-4726-491b-95a2-b4077dc7849f")
	)
	(label "ESC_TX1_D2"
		(at 314.96 160.02 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "07640717-4850-43ee-a36a-54a38b84c7a8")
	)
	(label "GPIO168"
		(at 299.72 139.7 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "07ad47d2-30e0-4345-9358-a469c8e3e790")
	)
	(label "ESC_TX0_D0"
		(at 314.96 100.33 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "0f508a98-30e8-4fa6-8564-e9d999f5db0a")
	)
	(label "GPIO160"
		(at 299.72 107.95 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "1df63920-b7ef-42b7-9ae0-fd24fbc3cccb")
	)
	(label "GPIO136"
		(at 299.72 168.91 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "22d9fab1-414d-4273-99b0-bf4945617402")
	)
	(label "ESC_RX1_D0"
		(at 314.96 180.34 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "24bedb51-5965-47f1-b156-0edca71b8782")
	)
	(label "ESC_RX0_D1"
		(at 314.96 132.08 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "2928189e-308c-457c-bcb8-d8722223d0af")
	)
	(label "ESC_TX1_D3"
		(at 314.96 163.83 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "2a855140-3e06-4930-88ca-0770541ba8a9")
	)
	(label "GPIO142"
		(at 299.72 191.77 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "2ab114c1-17e3-4829-be23-98507060d519")
	)
	(label "GPIO130"
		(at 299.72 148.59 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "2e96abe4-5da4-412f-ac26-6eb695dcc0f2")
	)
	(label "ESC_TX1_D0"
		(at 314.96 152.4 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "3d479dbc-529e-4e2b-8243-a7908fc2b899")
	)
	(label "GPIO131"
		(at 299.72 152.4 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "44678aa1-b5a2-4727-9347-0c324c76e8c9")
	)
	(label "GPIO134"
		(at 299.72 160.02 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "48636c72-bdf4-4597-aed8-80159116859e")
	)
	(label "GPIO163"
		(at 299.72 124.46 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "4a53f861-ab57-458c-9ad4-12830f9ac104")
	)
	(label "ESC_TX0_D1"
		(at 314.96 104.14 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "53be78f4-6654-4c2f-a92c-7e35e513bb85")
	)
	(label "GPIO129"
		(at 299.72 144.78 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "53df9e00-4650-48c3-a02d-d39623338f47")
	)
	(label "GPIO162"
		(at 299.72 116.84 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "5731ebd8-4493-4d6a-bf80-026c3c0432a6")
	)
	(label "GPIO156"
		(at 299.72 92.71 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "59c6fe95-131d-43c9-9bbf-5bbff1f97003")
	)
	(label "GPIO138"
		(at 299.72 172.72 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "61c00f0e-9ec5-41be-aa9b-7d5050fba7ea")
	)
	(label "ESC_TX0_EN"
		(at 314.96 92.71 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "6736d245-9571-4c16-8618-dc4b11182f2b")
	)
	(label "ESC_RX1_CLK"
		(at 314.96 176.53 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "7327a9da-db44-4e03-9744-f3726b32976f")
	)
	(label "GPIO164"
		(at 299.72 120.65 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "75174f9f-4fa5-452c-bc72-86a678c1fbea")
	)
	(label "ESC_RX1_D2"
		(at 314.96 187.96 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "76eea0b9-4d86-4ad1-b376-6c27cbef7158")
	)
	(label "ESC_RX0_D0"
		(at 314.96 128.27 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "78de0ad7-85dd-4be1-8d01-0d8850721ec5")
	)
	(label "GPIO135"
		(at 299.72 163.83 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "7de62a8a-53e7-447d-bd9e-480eb4df03f0")
	)
	(label "GPIO132"
		(at 299.72 156.21 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "84e3f7d8-c92c-46da-9a58-86b1cad3ccbc")
	)
	(label "ESC_RX0_ERR"
		(at 314.96 120.65 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "88d77f96-a0c2-4abd-b100-b41dd6d7d2cb")
	)
	(label "GPIO141"
		(at 299.72 187.96 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "8961b861-954e-4ced-bffd-d182a597481d")
	)
	(label "GPIO137"
		(at 299.72 176.53 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "89ec4b5c-04cf-48c2-88e1-5a2c602d6c4f")
	)
	(label "ESC_TX1_CLK"
		(at 314.96 148.59 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "8ebd3c1b-e9ff-426c-a8bc-a63c92cb530c")
	)
	(label "ESC_TX0_D2"
		(at 314.96 107.95 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "909b569d-bcc7-4f20-9118-2a8084e581ac")
	)
	(label "GPIO158"
		(at 299.72 100.33 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "94d61ad1-a07a-417a-94ca-25a4bbfe5ef3")
	)
	(label "ESC_RX1_DV"
		(at 314.96 168.91 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "a3fc64d3-66ea-4402-8465-2bdf8c7cc0df")
	)
	(label "ESC_TX0_CLK"
		(at 314.96 96.52 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "aea3dfed-e37b-48ce-8c1a-7cb0b009a4c4")
	)
	(label "ESC_TX0_D3"
		(at 314.96 111.76 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "b25522e3-47ab-4555-b22f-7b0dd370cf8c")
	)
	(label "GPIO140"
		(at 299.72 184.15 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "bad70946-c8c9-433e-a64b-28f6652fdc2d")
	)
	(label "GPIO167"
		(at 299.72 135.89 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "bcb0f821-1c37-47c1-99d8-76add43eb3a2")
	)
	(label "ESC_RX0_CLK"
		(at 314.96 124.46 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "c5c52144-7f07-4afe-bfa9-77a895a7877e")
	)
	(label "ESC_RX1_D3"
		(at 314.96 191.77 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "c60cdefd-9d87-470f-bd13-1c457d129037")
	)
	(label "GPIO159"
		(at 299.72 104.14 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "c8d0d823-4ca0-4715-a6b6-9c8520064dde")
	)
	(label "ESC_TX1_D1"
		(at 314.96 156.21 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "caefb302-8aa6-49fe-934e-70b29466b888")
	)
	(label "GPIO161"
		(at 299.72 111.76 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "cd8e4776-039e-4bc8-8fa5-65cda85da1a4")
	)
	(label "ESC_RX0_DV"
		(at 314.96 116.84 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "cf414359-092e-434e-85e7-c40af69adc26")
	)
	(label "ESC_TX1_EN"
		(at 314.96 144.78 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "d3f2922a-4bf1-41a1-84a4-e8ba335d51f5")
	)
	(label "ESC_RX1_D1"
		(at 314.96 184.15 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "d692188d-0fb6-47cd-822c-61194819e165")
	)
	(label "GPIO166"
		(at 299.72 132.08 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "d7e67ee9-f9ef-4792-888c-ea65670e85b4")
	)
	(label "GPIO165"
		(at 299.72 128.27 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "dd05d43d-fdfd-41ff-ac36-a082775d8749")
	)
	(label "ESC_RX1_ERR"
		(at 314.96 172.72 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "e7f68561-8925-442a-aa0c-7d5f5c9170e3")
	)
	(label "ESC_RX0_D2"
		(at 314.96 135.89 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "ea600983-30b2-437e-9e3b-0ce3d6ce2472")
	)
	(label "ESC_RX0_D3"
		(at 314.96 139.7 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "ed31dada-fdf9-4430-b091-3c3b696812b2")
	)
	(label "GPIO157"
		(at 299.72 96.52 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "efe82a29-0507-41b6-b7d6-efaa24f41956")
	)
	(label "GPIO139"
		(at 299.72 180.34 0)
		(effects
			(font
				(size 1.27 1.27)
			)
			(justify left bottom)
		)
		(uuid "ff8566a7-32c7-4cc4-927e-e874b05e8e1b")
	)
	(sheet_instances
		(path "/"
			(page "1")
		)
	)
	(embedded_fonts no)
)`;

const DEFAULT_JSON_CONTENT = `{
  "device": "TMS320F28388D ZWT",
  "timestamp": "2025-12-25T13:59:03.013Z",
  "configuration": [
    { "signal_name": "ESC_TX0_CLK", "gpio_pin": "GPIO85" },
    { "signal_name": "ESC_TX0_ENA", "gpio_pin": "GPIO84" },
    { "signal_name": "ESC_TX0_DATA0", "gpio_pin": "GPIO87" },
    { "signal_name": "ESC_TX0_DATA1", "gpio_pin": "GPIO159" },
    { "signal_name": "ESC_TX0_DATA2", "gpio_pin": "GPIO160" },
    { "signal_name": "ESC_TX0_DATA3", "gpio_pin": "GPIO161" },
    { "signal_name": "ESC_RX0_CLK", "gpio_pin": "GPIO77" },
    { "signal_name": "ESC_RX0_DV", "gpio_pin": "GPIO78" },
    { "signal_name": "ESC_RX0_DATA0", "gpio_pin": "GPIO80" },
    { "signal_name": "ESC_RX0_DATA1", "gpio_pin": "GPIO81" },
    { "signal_name": "ESC_RX0_DATA2", "gpio_pin": "GPIO82" },
    { "signal_name": "ESC_RX0_DATA3", "gpio_pin": "GPIO83" },
    { "signal_name": "ESC_RX0_ERR", "gpio_pin": "GPIO79" },
    { "signal_name": "ESC_PHY0_LINKSTATUS", "gpio_pin": "GPIO148" },
    { "signal_name": "ESC_TX1_CLK", "gpio_pin": "GPIO44" },
    { "signal_name": "ESC_TX1_ENA", "gpio_pin": "GPIO45" },
    { "signal_name": "ESC_TX1_DATA0", "gpio_pin": "GPIO75" },
    { "signal_name": "ESC_TX1_DATA1", "gpio_pin": "GPIO74" },
    { "signal_name": "ESC_TX1_DATA2", "gpio_pin": "GPIO73" },
    { "signal_name": "ESC_TX1_DATA3", "gpio_pin": "GPIO72" },
    { "signal_name": "ESC_RX1_CLK", "gpio_pin": "GPIO69" },
    { "signal_name": "ESC_RX1_DV", "gpio_pin": "GPIO70" },
    { "signal_name": "ESC_RX1_DATA0", "gpio_pin": "GPIO63" },
    { "signal_name": "ESC_RX1_DATA1", "gpio_pin": "GPIO64" },
    { "signal_name": "ESC_RX1_DATA2", "gpio_pin": "GPIO65" },
    { "signal_name": "ESC_RX1_DATA3", "gpio_pin": "GPIO66" },
    { "signal_name": "ESC_RX1_ERR", "gpio_pin": "GPIO71" },
    { "signal_name": "ESC_PHY1_LINKSTATUS", "gpio_pin": "GPIO68" },
    { "signal_name": "ESC_MDIO_CLK", "gpio_pin": "GPIO46" },
    { "signal_name": "ESC_MDIO_DATA", "gpio_pin": "GPIO47" },
    { "signal_name": "ESC_PHY_RESETn", "gpio_pin": "GPIO76" },
    { "signal_name": "ESC_I2C_SDA", "gpio_pin": "GPIO150" },
    { "signal_name": "ESC_I2C_SCL", "gpio_pin": "GPIO151" },
    { "signal_name": "ESC_LED_RUN", "gpio_pin": "GPIO61" },
    { "signal_name": "ESC_LED_ERR", "gpio_pin": "GPIO60" },
    { "signal_name": "ESC_LED_LINK0_ACTIVE", "gpio_pin": "GPIO143" },
    { "signal_name": "ESC_LED_LINK1_ACTIVE", "gpio_pin": "GPIO144" },
    { "signal_name": "ESC_PHY_CLK", "gpio_pin": "GPIO154" }
  ]
}`;

// --- TYPES ---

type Point = { x: number; y: number };

type Wire = {
    start: Point;
    end: Point;
    uuid?: string;
};

type Label = {
    text: string;
    position: Point;
    rotation?: number;
    uuid?: string;
    // For rendering
    originalText?: string;
    isUpdated?: boolean;
    oldText?: string;
};

type SchematicData = {
    wires: Wire[];
    labels: Label[];
};

type JsonConfigItem = {
    signal_name: string;
    gpio_pin: string;
};

type JsonConfig = {
    configuration: JsonConfigItem[];
};

// --- HELPERS ---

const parseSchematic = (content: string): SchematicData => {
    const wires: Wire[] = [];
    const labels: Label[] = [];

    // Parse Wires: (wire (pts (xy x1 y1) (xy x2 y2)))
    const wireRegex = /\(wire\s+\(pts\s+\(xy\s+([\d\.-]+)\s+([\d\.-]+)\)\s+\(xy\s+([\d\.-]+)\s+([\d\.-]+)\)\)/g;
    for (const match of content.matchAll(wireRegex)) {
        wires.push({
            start: { x: parseFloat(match[1]), y: parseFloat(match[2]) },
            end: { x: parseFloat(match[3]), y: parseFloat(match[4]) },
        });
    }

    // Parse Labels: (label "TEXT" (at x y rot) ...)
    const labelRegex = /\(label\s+"([^"]+)"\s+\(at\s+([\d\.-]+)\s+([\d\.-]+)\s+([\d\.-]+)\)/g;
    for (const match of content.matchAll(labelRegex)) {
        labels.push({
            text: match[1],
            position: { x: parseFloat(match[2]), y: parseFloat(match[3]) },
            rotation: parseFloat(match[4]),
            originalText: match[1],
            isUpdated: false
        });
    }

    return { wires, labels };
};

const mapSignalsToGPIOs = (schematic: SchematicData, config: JsonConfigItem[]): { updatedLabels: Label[], changeCount: number } => {
    // Deep clone labels to avoid mutating state directly
    let newLabels = JSON.parse(JSON.stringify(schematic.labels));
    let changes = 0;

    // 1. Group labels by Y-coordinate (tolerance for floating point)
    const TOLERANCE = 0.5;
    const rows: { [y: string]: Label[] } = {};

    newLabels.forEach((lbl: Label) => {
        // Find existing bucket
        let foundKey = Object.keys(rows).find(key => Math.abs(parseFloat(key) - lbl.position.y) < TOLERANCE);
        if (!foundKey) {
            foundKey = lbl.position.y.toString();
            rows[foundKey] = [];
        }
        rows[foundKey].push(lbl);
    });

    // 2. Process matches
    config.forEach(cfg => {
        // Find if this signal exists in the schematic
        // We look through all rows to find a label matching config.signal_name
        for (const yKey in rows) {
            const rowLabels = rows[yKey];
            const signalLabel = rowLabels.find(l => l.text === cfg.signal_name);

            if (signalLabel) {
                // Found the signal label. Now look for its GPIO partner in the same row.
                // We assume the partner is the one that starts with "GPIO" or is just the 'other' one.
                const gpioLabel = rowLabels.find(l => l !== signalLabel && (l.text.startsWith("GPIO") || rowLabels.length === 2));

                if (gpioLabel) {
                    // Check if it actually needs updating
                    if (gpioLabel.text !== cfg.gpio_pin) {
                        gpioLabel.oldText = gpioLabel.text;
                        gpioLabel.text = cfg.gpio_pin;
                        gpioLabel.isUpdated = true;
                        changes++;
                    }
                }
            }
        }
    });

    return { updatedLabels: newLabels, changeCount: changes };
};


// --- COMPONENT ---

export default function SchematicViewer() {
    const [schematicData, setSchematicData] = useState<SchematicData | null>(null);
    const [jsonConfig, setJsonConfig] = useState<JsonConfigItem[]>([]);
    const [viewBox, setViewBox] = useState("0 0 100 100");
    const [changeLog, setChangeLog] = useState<string[]>([]);
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    
    // Default load effect
    useEffect(() => {
        handleLoadDefault();
    }, []);

    const handleLoadDefault = () => {
        // Load Schematic
        const parsedSchematic = parseSchematic(DEFAULT_SCHEMATIC_CONTENT);
        setSchematicData(parsedSchematic);
        calculateViewBox(parsedSchematic);

        // Load JSON logic is separate usually, but for "Default" we assume the user wants both
        // However, let's just load schematic first, then user clicks "Apply JSON" or we load it but don't apply until requested?
        // Prompt implies "allow me to upload a json... to update". 
        // We will load the JSON data into state but maybe apply it immediately for the "default" experience.
        try {
            const parsedJson = JSON.parse(DEFAULT_JSON_CONTENT);
            if (parsedJson.configuration) {
                 // Apply immediately for the demo experience
                 const { updatedLabels, changeCount } = mapSignalsToGPIOs(parsedSchematic, parsedJson.configuration);
                 setSchematicData({ ...parsedSchematic, labels: updatedLabels });
                 setJsonConfig(parsedJson.configuration);
                 setChangeLog([`Loaded default configuration with ${changeCount} updates.`]);
            }
        } catch (e) {
            console.error("Error parsing default JSON", e);
        }
    };

    const calculateViewBox = (data: SchematicData) => {
        if (data.wires.length === 0 && data.labels.length === 0) return;

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        const updateBounds = (x: number, y: number) => {
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        };

        data.wires.forEach(w => {
            updateBounds(w.start.x, w.start.y);
            updateBounds(w.end.x, w.end.y);
        });

        data.labels.forEach(l => {
            updateBounds(l.position.x, l.position.y);
        });

        const padding = 20;
        const width = maxX - minX + (padding * 2);
        const height = maxY - minY + (padding * 2);
        
        // Center view initially
        setViewBox(`${minX - padding} ${minY - padding} ${width} ${height}`);
        setZoom(1);
        setPan({x: 0, y: 0});
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'sch' | 'json') => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target?.result as string;
            if (type === 'sch') {
                const parsed = parseSchematic(content);
                setSchematicData(parsed);
                calculateViewBox(parsed);
                setChangeLog(prev => [...prev, `Loaded schematic: ${file.name}`]);
                // If we already have JSON config, try re-applying it?
                if (jsonConfig.length > 0) {
                     const { updatedLabels, changeCount } = mapSignalsToGPIOs(parsed, jsonConfig);
                     setSchematicData({ ...parsed, labels: updatedLabels });
                     setChangeLog(prev => [...prev, `Re-applied existing JSON config: ${changeCount} updates.`]);
                }
            } else {
                try {
                    const json = JSON.parse(content);
                    const config = json.configuration || [];
                    setJsonConfig(config);
                    
                    if (schematicData) {
                        const { updatedLabels, changeCount } = mapSignalsToGPIOs(schematicData, config);
                        setSchematicData({ ...schematicData, labels: updatedLabels });
                        setChangeLog(prev => [...prev, `Loaded JSON ${file.name}: Updated ${changeCount} GPIOs.`]);
                    }
                } catch (err) {
                    alert("Invalid JSON file");
                }
            }
        };
        reader.readAsText(file);
    };

    // --- INTERACTION HANDLERS ---
    
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const zoomFactor = 1.1;
        const newZoom = e.deltaY < 0 ? zoom * zoomFactor : zoom / zoomFactor;
        setZoom(Math.max(0.1, Math.min(newZoom, 10)));
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const dx = (e.clientX - dragStart.x) / zoom;
        const dy = (e.clientY - dragStart.y) / zoom;
        setPan({ x: pan.x - dx, y: pan.y - dy }); // Invert direction for natural drag
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };


    return (
        <div className="flex h-screen w-full bg-gray-900 text-gray-100 font-sans overflow-hidden">
            {/* SIDEBAR */}
            <div className="w-80 flex-shrink-0 border-r border-gray-800 flex flex-col bg-gray-950">
                <div className="p-4 border-b border-gray-800">
                    <h1 className="text-xl font-bold flex items-center gap-2 text-blue-400">
                        <RefreshCw className="w-5 h-5" />
                        KiCad Visualizer
                    </h1>
                    <p className="text-xs text-gray-500 mt-1">Schematic & GPIO Mapping</p>
                </div>

                <div className="p-4 space-y-6 flex-1 overflow-y-auto">
                    {/* Controls */}
                    <div className="space-y-4">
                        <button 
                            onClick={handleLoadDefault}
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" /> Reset / Load Default
                        </button>

                        <div className="space-y-2">
                            <label className="block text-xs uppercase text-gray-500 font-semibold tracking-wider">Schematic (.kicad_sch)</label>
                            <div className="relative">
                                <input 
                                    type="file" 
                                    accept=".kicad_sch,.sch"
                                    onChange={(e) => handleFileUpload(e, 'sch')}
                                    className="hidden" 
                                    id="sch-upload" 
                                />
                                <label 
                                    htmlFor="sch-upload"
                                    className="flex items-center gap-2 w-full p-2 bg-gray-800 border border-gray-700 rounded cursor-pointer hover:bg-gray-700 transition-colors text-sm"
                                >
                                    <FileText className="w-4 h-4 text-orange-400" />
                                    <span>Upload Schematic</span>
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs uppercase text-gray-500 font-semibold tracking-wider">Config (.json)</label>
                            <div className="relative">
                                <input 
                                    type="file" 
                                    accept=".json"
                                    onChange={(e) => handleFileUpload(e, 'json')}
                                    className="hidden" 
                                    id="json-upload" 
                                />
                                <label 
                                    htmlFor="json-upload"
                                    className="flex items-center gap-2 w-full p-2 bg-gray-800 border border-gray-700 rounded cursor-pointer hover:bg-gray-700 transition-colors text-sm"
                                >
                                    <FileJson className="w-4 h-4 text-green-400" />
                                    <span>Upload JSON Config</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    {schematicData && (
                        <div className="bg-gray-900 rounded p-3 text-sm space-y-1 border border-gray-800">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Wires:</span>
                                <span className="font-mono">{schematicData.wires.length}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Labels:</span>
                                <span className="font-mono">{schematicData.labels.length}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Mapped:</span>
                                <span className="font-mono text-green-400">
                                    {schematicData.labels.filter(l => l.isUpdated).length}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Log */}
                    <div className="space-y-2">
                        <label className="block text-xs uppercase text-gray-500 font-semibold tracking-wider">Activity Log</label>
                        <div className="bg-gray-900 rounded p-2 h-40 overflow-y-auto text-xs font-mono border border-gray-800">
                            {changeLog.length === 0 ? (
                                <span className="text-gray-600 italic">No activity yet...</span>
                            ) : (
                                changeLog.map((log, i) => (
                                    <div key={i} className="mb-1 pb-1 border-b border-gray-800 last:border-0">
                                        <span className="text-blue-500 mr-1">{'>'}</span>{log}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CANVAS */}
            <div className="flex-1 relative bg-gray-900 overflow-hidden flex flex-col">
                {/* Toolbar */}
                <div className="absolute top-4 right-4 bg-gray-800 rounded-lg shadow-lg p-2 flex gap-2 z-10 border border-gray-700">
                    <button 
                        onClick={() => setZoom(z => Math.min(z * 1.2, 10))}
                        className="p-2 hover:bg-gray-700 rounded text-gray-300" 
                        title="Zoom In"
                    >
                        <ZoomIn className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => setZoom(z => Math.max(z / 1.2, 0.1))}
                        className="p-2 hover:bg-gray-700 rounded text-gray-300" 
                        title="Zoom Out"
                    >
                        <ZoomOut className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => {
                            if (schematicData) calculateViewBox(schematicData);
                        }}
                        className="p-2 hover:bg-gray-700 rounded text-gray-300" 
                        title="Reset View"
                    >
                        <Move className="w-5 h-5" />
                    </button>
                </div>
                
                {/* Canvas Area */}
                <div 
                    className="flex-1 w-full h-full cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onWheel={handleWheel}
                >
                    {schematicData ? (
                        <svg 
                            className="w-full h-full"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox={viewBox}
                        >
                            {/* Transform group for Zoom/Pan */}
                            <g transform={`scale(${zoom}) translate(${-pan.x}, ${-pan.y})`}>
                                {/* Grid Background (Optional context) */}
                                <defs>
                                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.1"/>
                                    </pattern>
                                </defs>
                                <rect x="-5000" y="-5000" width="10000" height="10000" fill="url(#grid)" />

                                {/* Wires */}
                                {schematicData.wires.map((wire, idx) => (
                                    <line
                                        key={`wire-${idx}`}
                                        x1={wire.start.x}
                                        y1={wire.start.y}
                                        x2={wire.end.x}
                                        y2={wire.end.y}
                                        stroke="#4b5563" // Gray-600
                                        strokeWidth="0.5"
                                        strokeLinecap="round"
                                    />
                                ))}

                                {/* Labels */}
                                {schematicData.labels.map((label, idx) => {
                                    // Determine color
                                    let fill = "#9ca3af"; // Gray-400 default
                                    let fontWeight = "normal";
                                    let fontSize = 1.27; // From file

                                    if (label.text.startsWith("GPIO")) {
                                        fill = "#fca5a5"; // Red-300 for GPIOs
                                    } else if (label.text.startsWith("ESC")) {
                                        fill = "#93c5fd"; // Blue-300 for Signals
                                    }

                                    if (label.isUpdated) {
                                        fill = "#4ade80"; // Green-400 for updated
                                        fontWeight = "bold";
                                    }

                                    return (
                                        <g key={`label-${idx}`} transform={`translate(${label.position.x}, ${label.position.y})`}>
                                            <text
                                                className="select-none pointer-events-none"
                                                fontSize={fontSize}
                                                fill={fill}
                                                fontWeight={fontWeight}
                                                textAnchor="start" // Defaulting to start based on KiCad typically, though file says 'left bottom'
                                                // Adjusting dy to simulate baseline behavior if needed, usually 0 is fine for SVG text baseline
                                                dy="-0.2" 
                                            >
                                                {label.text}
                                            </text>
                                            
                                            {/* Indicator for update */}
                                            {label.isUpdated && (
                                                <circle cx="-1" cy="-0.5" r="0.5" fill="#4ade80" />
                                            )}

                                            {/* Tooltip-like hint on hover could go here, but doing SVG hover is tricky without foreignObject. 
                                                Visual indicator of 'old text' is simpler via color. 
                                            */}
                                        </g>
                                    );
                                })}
                            </g>
                        </svg>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500 flex-col gap-4">
                            <Upload className="w-12 h-12 opacity-50" />
                            <p>Upload a .kicad_sch file or click Reset to load defaults.</p>
                        </div>
                    )}
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-gray-900/90 border border-gray-800 p-3 rounded-lg text-xs flex gap-4 pointer-events-none">
                     <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-300"></span> Signal
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-300"></span> Original GPIO
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-400"></span> Updated GPIO (from JSON)
                     </div>
                </div>
            </div>
        </div>
    );
}