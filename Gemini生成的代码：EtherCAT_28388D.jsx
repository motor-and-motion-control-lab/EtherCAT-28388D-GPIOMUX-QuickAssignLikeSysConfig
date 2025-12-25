import React, { useState, useEffect, useMemo } from 'react';
import { Download, RefreshCw, Layers, Map, CheckCircle, Info, AlertTriangle, Zap, Ban, Edit3, MousePointer, Eye, X, ArrowDownRight } from 'lucide-react';

// --- Constants & Data ---

// Rows W (Top) to A (Bottom)
const ROWS = ['W', 'V', 'U', 'T', 'R', 'P', 'N', 'M', 'L', 'K', 'J', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
const COLS = Array.from({ length: 19 }, (_, i) => i + 1);

// --- 1. PIN DEFINITIONS (Hardware Layer) ---
// UPDATED with FULL User CSV Data (Rows W-A, Cols 1-19)
const PIN_HARDWARE_MAP = {
  // Row W
  'W1': 'VSSA', 'W2': 'ADCINB1, DACOUTC', 'W3': 'ADCINB3, CMPIN3N', 'W4': 'ADCINB5', 'W5': 'VREFHIB',
  'W6': 'VREFLOD', 'W7': 'VSS', 'W8': 'VDDIO', 'W9': 'GPIO128', 'W10': 'GPIO116',
  'W11': 'GPIO29', 'W12': 'FLT1', 'W13': 'TDI', 'W14': 'TMS', 'W15': 'TDO',
  'W16': 'GPIO121', 'W17': 'GPIO39', 'W18': 'GPIO132', 'W19': 'VSS',

  // Row V
  'V1': 'VREFHIA', 'V2': 'ADCINB0, VDAC', 'V3': 'ADCINB2, CMPIN3P', 'V4': 'ADCINB4', 'V5': 'VREFHID',
  'V6': 'VREFLOB', 'V7': 'VSSA', 'V8': 'GPIO124', 'V9': 'GPIO127', 'V10': 'GPIO131',
  'V11': 'GPIO28', 'V12': 'GPIO115', 'V13': 'FLT2', 'V14': 'TRSTn', 'V15': 'TCK',
  'V16': 'GPIO36', 'V17': 'GPIO40', 'V18': 'GPIO134', 'V19': 'VDDIO',

  // Row U
  'U1': 'ADCINA0, DACOUTA', 'U2': 'ADCINA2, CMPIN1P', 'U3': 'ADCINA4, CMPIN2P', 'U4': 'ADCIN15, CMPIN4N', 'U5': 'ADCIND1, CMPIN7N',
  'U6': 'ADCIND3, CMPIN8N', 'U7': 'ADCIND5', 'U8': 'GPIO123', 'U9': 'GPIO126', 'U10': 'GPIO130',
  'U11': 'GPIO31', 'U12': 'GPIO117', 'U13': 'GPIO32', 'U14': 'GPIO34', 'U15': 'GPIO120',
  'U16': 'GPIO37', 'U17': 'GPIO41', 'U18': 'GPIO135', 'U19': 'ERRORSTS',

  // Row T
  'T1': 'ADCINA1, DACOUTB', 'T2': 'ADCINA3, CMPIN1N', 'T3': 'ADCINA5, CMPIN2N', 'T4': 'ADCIN14, CMPIN4P', 'T5': 'ADCIND0, CMPIN7P',
  'T6': 'ADCIND2, CMPIN8P', 'T7': 'ADCIND4', 'T8': 'GPIO122', 'T9': 'GPIO125', 'T10': 'GPIO129',
  'T11': 'GPIO30', 'T12': 'GPIO118', 'T13': 'GPIO33', 'T14': 'GPIO35', 'T15': 'GPIO119',
  'T16': 'GPIO38', 'T17': 'GPIO136', 'T18': 'GPIO137', 'T19': 'GPIO138',

  // Row R
  'R1': 'VREFHIC', 'R2': 'VREFLOA', 'R3': 'ADCINC2, CMPIN6P', 'R4': 'ADCINC4, CMPIN5P', 'R5': 'VSSA',
  'R6': 'VDDA', 'R7': 'VSS', 'R8': 'VSS', 'R9': 'VDDIO', 'R10': 'VDD',
  'R11': 'VDD3VFL', 'R12': 'VDD3VFL', 'R13': 'VDD', 'R14': 'VSS', 'R15': 'VSS',
  'R16': 'GPIO48', 'R17': 'GPIO49', 'R18': 'GPIO50', 'R19': 'GPIO51',

  // Row P
  'P1': 'VSSA', 'P2': 'VREFLOC', 'P3': 'ADCINC3, CMPIN6N', 'P4': 'ADCINC5, CMPIN5N', 'P5': 'VSSA',
  'P6': 'VDDA', 'P7': 'VSS', 'P8': 'VSS', 'P9': 'VDDIO', 'P10': 'VDD',
  'P11': 'VSS', 'P12': 'VSS', 'P13': 'VDD', 'P14': 'VSS', 'P15': 'VSS',
  'P16': 'GPIO52', 'P17': 'GPIO53', 'P18': 'GPIO54', 'P19': 'GPIO55',

  // Row N
  'N1': 'VSS', 'N2': 'GPIO109', 'N3': 'GPIO114', 'N4': 'GPIO113', 'N5': 'VSS', 'N6': 'VSS',
  // N7-N13 Empty in CSV
  'N14': 'VDDIO', 'N15': 'VDDIO', 'N16': 'GPIO56', 'N17': 'GPIO58', 'N18': 'GPIO57', 'N19': 'GPIO139',

  // Row M
  'M1': 'VDDIO', 'M2': 'GPIO110', 'M3': 'GPIO112', 'M4': 'GPIO111', 'M5': 'VDDIO', 'M6': 'VDDIO',
  // M7 Empty
  'M8': 'VSS', 'M9': 'VSS', 'M10': 'VSS', 'M11': 'VSS', 'M12': 'VSS',
  // M13 Empty
  'M14': 'VSS', 'M15': 'VSS', 'M16': 'GPIO59', 'M17': 'GPIO60', 'M18': 'GPIO141', 'M19': 'GPIO140',

  // Row L
  'L1': 'GPIO27', 'L2': 'GPIO106', 'L3': 'GPIO107', 'L4': 'GPIO108', 'L5': 'VSS', 'L6': 'VSS',
  // L7 Empty
  'L8': 'VSS', 'L9': 'VSS', 'L10': 'VSS', 'L11': 'VSS', 'L12': 'VSS',
  // L13 Empty
  'L14': 'VDDIO', 'L15': 'VDDIO', 'L16': 'GPIO61', 'L17': 'GPIO64', 'L18': 'VSS', 'L19': 'GPIO142',

  // Row K
  'K1': 'GPIO26', 'K2': 'GPIO25', 'K3': 'GPIO24', 'K4': 'GPIO23', 'K5': 'VDD', 'K6': 'VDD',
  // K7 Empty
  'K8': 'VSS', 'K9': 'VSS', 'K10': 'VSS', 'K11': 'VSS', 'K12': 'VSS',
  // K13 Empty
  'K14': 'VSS', 'K15': 'VSS', 'K16': 'GPIO65', 'K17': 'GPIO66', 'K18': 'GPIO44', 'K19': 'GPIO45',

  // Row J
  'J1': 'GPIO103', 'J2': 'GPIO104', 'J3': 'GPIO105', 'J4': 'GPIO22', 'J5': 'VSS', 'J6': 'VSS',
  // J7 Empty
  'J8': 'VSS', 'J9': 'VSS', 'J10': 'VSS', 'J11': 'VSS', 'J12': 'VSS',
  // J13 Empty
  'J14': 'VDD', 'J15': 'VDD', 'J16': 'GPIO63', 'J17': 'GPIO62', 'J18': 'NC', 'J19': 'X2',

  // Row H
  'H1': 'GPIO100', 'H2': 'GPIO101', 'H3': 'GPIO102', 'H4': 'NC', 'H5': 'VDDIO', 'H6': 'VDDIO',
  // H7 Empty
  'H8': 'VSS', 'H9': 'VSS', 'H10': 'VSS', 'H11': 'VSS', 'H12': 'VSS',
  // H13 Empty
  'H14': 'VSS', 'H15': 'VSS', 'H16': 'VDDOSC', 'H17': 'VDDOSC', 'H18': 'VSSOSC', 'H19': 'VSSOSC',

  // Row G
  'G1': 'GPIO99', 'G2': 'GPIO8', 'G3': 'GPIO9', 'G4': 'VDDIO', 'G5': 'VDDIO', 'G6': 'VDDIO',
  // G7-G13 Empty
  'G14': 'VDD', 'G15': 'VDD', 'G16': 'VSS', 'G17': 'VSS', 'G18': 'GPIO133', 'G19': 'X1',

  // Row F
  'F1': 'GPIO98', 'F2': 'GPIO20', 'F3': 'GPIO21', 'F4': 'VDDIO', 'F5': 'VSS', 'F6': 'VSS',
  'F7': 'VDDIO', 'F8': 'VSS', 'F9': 'VDD', 'F10': 'VDDIO', 'F11': 'VDD', 'F12': 'VSS',
  'F13': 'VDDIO', 'F14': 'VSS', 'F15': 'VSS', 'F16': 'VDDIO', 'F17': 'GPIO144', 'F18': 'GPIO143', 'F19': 'XRSn',

  // Row E
  'E1': 'GPIO16', 'E2': 'GPIO17', 'E3': 'GPIO18', 'E4': 'GPIO19', 'E5': 'VSS', 'E6': 'VSS',
  'E7': 'VDDIO', 'E8': 'VSS', 'E9': 'VDD', 'E10': 'VDDIO', 'E11': 'VDD', 'E12': 'VSS',
  'E13': 'VDDIO', 'E14': 'VSS', 'E15': 'VSS', 'E16': 'VDDIO', 'E17': 'GPIO145', 'E18': 'GPIO47', 'E19': 'GPIO46',

  // Row D
  'D1': 'GPIO13', 'D2': 'GPIO14', 'D3': 'GPIO15', 'D4': 'GPIO168', 'D5': 'GPIO166', 'D6': 'GPIO89',
  'D7': 'GPIO5', 'D8': 'GPIO1', 'D9': 'GPIO162', 'D10': 'GPIO159', 'D11': 'GPIO87', 'D12': 'GPIO156',
  'D13': 'GPIO152', 'D14': 'GPIO148', 'D15': 'GPIO80', 'D16': 'GPIO75', 'D17': 'GPIO147', 'D18': 'GPIO146', 'D19': 'GPIO42',

  // Row C
  'C1': 'GPIO11', 'C2': 'GPIO12', 'C3': 'GPIO96', 'C4': 'GPIO167', 'C5': 'GPIO165', 'C6': 'GPIO88',
  'C7': 'GPIO4', 'C8': 'GPIO0', 'C9': 'GPIO161', 'C10': 'GPIO158', 'C11': 'GPIO86', 'C12': 'GPIO155',
  'C13': 'GPIO151', 'C14': 'GPIO83', 'C15': 'GPIO79', 'C16': 'GPIO76', 'C17': 'GPIO74', 'C18': 'GPIO68', 'C19': 'GPIO43',

  // Row B
  'B1': 'VDDIO', 'B2': 'GPIO10', 'B3': 'GPIO95', 'B4': 'GPIO93', 'B5': 'GPIO91', 'B6': 'GPIO7',
  'B7': 'GPIO3', 'B8': 'GPIO164', 'B9': 'GPIO160', 'B10': 'GPIO157', 'B11': 'GPIO85', 'B12': 'GPIO154',
  'B13': 'GPIO150', 'B14': 'GPIO82', 'B15': 'GPIO78', 'B16': 'GPIO72', 'B17': 'GPIO71', 'B18': 'GPIO69', 'B19': 'GPIO67',

  // Row A
  'A1': 'VSS', 'A2': 'GPIO97', 'A3': 'GPIO94', 'A4': 'GPIO92', 'A5': 'GPIO90', 'A6': 'GPIO6',
  'A7': 'GPIO2', 'A8': 'GPIO163', 'A9': 'VDDIO', 'A10': 'VSS', 'A11': 'GPIO84', 'A12': 'GPIO153',
  'A13': 'GPIO149', 'A14': 'GPIO81', 'A15': 'GPIO77', 'A16': 'GPIO73', 'A17': 'GPIO70', 'A18': 'VDDIO', 'A19': 'VSS',
};

// --- 2. VALID MUX MAP (The Rulebook) ---
const VALID_MUX_MAP = {
  // --- Port 0 ---
  'ESC_TX0_CLK':   ['GPIO85', 'GPIO157'],
  'ESC_TX0_ENA':   ['GPIO84', 'GPIO156'],
  'ESC_TX0_DATA0': ['GPIO87', 'GPIO158'],
  'ESC_TX0_DATA1': ['GPIO88', 'GPIO159'],
  'ESC_TX0_DATA2': ['GPIO89', 'GPIO160'],
  'ESC_TX0_DATA3': ['GPIO90', 'GPIO161'],
  'ESC_RX0_CLK':   ['GPIO77', 'GPIO163'],
  'ESC_RX0_DV':    ['GPIO78', 'GPIO162'],
  'ESC_RX0_DATA0': ['GPIO80', 'GPIO165'],
  'ESC_RX0_DATA1': ['GPIO81', 'GPIO166'],
  'ESC_RX0_DATA2': ['GPIO82', 'GPIO167'],
  'ESC_RX0_DATA3': ['GPIO83', 'GPIO168'],
  'ESC_RX0_ERR':   ['GPIO79', 'GPIO164'],
  'ESC_PHY0_LINKSTATUS': ['GPIO86', 'GPIO148'],

  // --- Port 1 ---
  'ESC_TX1_CLK':   ['GPIO44', 'GPIO130'],
  'ESC_TX1_ENA':   ['GPIO45', 'GPIO129'],
  'ESC_TX1_DATA0': ['GPIO75', 'GPIO131'],
  'ESC_TX1_DATA1': ['GPIO74', 'GPIO132'],
  'ESC_TX1_DATA2': ['GPIO73', 'GPIO134'],
  'ESC_TX1_DATA3': ['GPIO72', 'GPIO135'],
  'ESC_RX1_CLK':   ['GPIO69', 'GPIO137'],
  'ESC_RX1_DV':    ['GPIO70', 'GPIO136'],
  'ESC_RX1_DATA0': ['GPIO63', 'GPIO139'],
  'ESC_RX1_DATA1': ['GPIO64', 'GPIO140'],
  'ESC_RX1_DATA2': ['GPIO65', 'GPIO141'],
  'ESC_RX1_DATA3': ['GPIO66', 'GPIO142'],
  'ESC_RX1_ERR':   ['GPIO71', 'GPIO138'],
  'ESC_PHY1_LINKSTATUS': ['GPIO68', 'GPIO149'],

  // --- Common & Indicators ---
  'ESC_MDIO_CLK':  ['GPIO26', 'GPIO46', 'GPIO152'],
  'ESC_MDIO_DATA': ['GPIO27', 'GPIO47', 'GPIO153'],
  'ESC_PHY_RESETn': ['GPIO76', 'GPIO155'],
  'ESC_PHY_CLK':   ['GPIO48', 'GPIO154'],
  
  'ESC_I2C_SDA':   ['GPIO29', 'GPIO40', 'GPIO150'],
  'ESC_I2C_SCL':   ['GPIO30', 'GPIO41', 'GPIO151'],
  'ESC_LED_RUN':   ['GPIO61', 'GPIO146'],
  'ESC_LED_ERR':   ['GPIO60', 'GPIO145'],
  'ESC_LED_LINK0_ACTIVE': ['GPIO58', 'GPIO143'],
  'ESC_LED_LINK1_ACTIVE': ['GPIO59', 'GPIO144'],
};

// --- PRESET: East/South Fanout Optimization ---
const PRESET_EAST_SOUTH = {
  // Port 0 (South/South-East Focus: Rows A, B, C, D)
  'B11': 'ESC_TX0_CLK',   // GPIO85
  'A11': 'ESC_TX0_ENA',   // GPIO84
  'D11': 'ESC_TX0_DATA0', // GPIO87
  'D10': 'ESC_TX0_DATA1', // GPIO159 (Best available south)
  'B9':  'ESC_TX0_DATA2', // GPIO160 (Best available south)
  'C9':  'ESC_TX0_DATA3', // GPIO161 (Best available south)
  'A15': 'ESC_RX0_CLK',   // GPIO77
  'B15': 'ESC_RX0_DV',    // GPIO78
  'D15': 'ESC_RX0_DATA0', // GPIO80
  'A14': 'ESC_RX0_DATA1', // GPIO81
  'B14': 'ESC_RX0_DATA2', // GPIO82
  'C14': 'ESC_RX0_DATA3', // GPIO83
  'C15': 'ESC_RX0_ERR',   // GPIO79
  'D14': 'ESC_PHY0_LINKSTATUS', // GPIO148

  // Port 1 (East Focus: Rows K-A, Cols 16-19)
  'K18': 'ESC_TX1_CLK',   // GPIO44
  'K19': 'ESC_TX1_ENA',   // GPIO45
  'D16': 'ESC_TX1_DATA0', // GPIO75
  'C17': 'ESC_TX1_DATA1', // GPIO74
  'A16': 'ESC_TX1_DATA2', // GPIO73
  'B16': 'ESC_TX1_DATA3', // GPIO72
  'B18': 'ESC_RX1_CLK',   // GPIO69
  'A17': 'ESC_RX1_DV',    // GPIO70
  'J16': 'ESC_RX1_DATA0', // GPIO63
  'L17': 'ESC_RX1_DATA1', // GPIO64
  'K16': 'ESC_RX1_DATA2', // GPIO65
  'K17': 'ESC_RX1_DATA3', // GPIO66
  'B17': 'ESC_RX1_ERR',   // GPIO71
  'C18': 'ESC_PHY1_LINKSTATUS', // GPIO68

  // Common / LEDs (East Edge)
  'E19': 'ESC_MDIO_CLK',  // GPIO46
  'E18': 'ESC_MDIO_DATA', // GPIO47
  'C16': 'ESC_PHY_RESETn', // GPIO76
  'R16': 'ESC_PHY_CLK',   // GPIO48
  'B13': 'ESC_I2C_SDA',   // GPIO150
  'C13': 'ESC_I2C_SCL',   // GPIO151
  'L16': 'ESC_LED_RUN',   // GPIO61
  'M17': 'ESC_LED_ERR',   // GPIO60
  'F18': 'ESC_LED_LINK0_ACTIVE', // GPIO143
  'F17': 'ESC_LED_LINK1_ACTIVE', // GPIO144
};

// Helper: Identify Power Pins to Block
const isPowerPin = (label) => {
  if (!label) return false;
  const upper = label.toUpperCase();
  const powerKeywords = ['VDD', 'VSS', 'VREF', 'X1', 'X2'];
  return powerKeywords.some(keyword => upper.includes(keyword));
};

const getRingIndex = (rowName, colNum) => {
  const rowIdx = ROWS.indexOf(rowName);
  const colIdx = colNum - 1;
  const maxIdx = 18;
  const distTop = rowIdx;
  const distBottom = maxIdx - rowIdx;
  const distLeft = colIdx;
  const distRight = maxIdx - colIdx;
  return Math.min(distTop, distBottom, distLeft, distRight);
};

// Color maps for groups
const GROUP_COLORS = {
  'port0': { bg: 'bg-blue-500', text: 'text-blue-600', ring: 'ring-blue-300', border: 'border-blue-500' },
  'port1': { bg: 'bg-orange-500', text: 'text-orange-600', ring: 'ring-orange-300', border: 'border-orange-500' },
  'common': { bg: 'bg-emerald-600', text: 'text-emerald-700', ring: 'ring-emerald-300', border: 'border-emerald-600' },
  'indicators': { bg: 'bg-purple-600', text: 'text-purple-700', ring: 'ring-purple-300', border: 'border-purple-600' }
};

const SIGNAL_GROUPS = [
  {
    id: 'port0',
    title: 'EtherCAT Port 0 (MII)',
    ...GROUP_COLORS['port0'],
    signals: [
      { id: 'ESC_TX0_CLK', name: 'TX0_CLK', desc: 'Transmit Clock' },
      { id: 'ESC_TX0_ENA', name: 'TX0_ENA', desc: 'Transmit Enable' },
      { id: 'ESC_TX0_DATA0', name: 'TX0_DATA0', desc: 'TX Data 0' },
      { id: 'ESC_TX0_DATA1', name: 'TX0_DATA1', desc: 'TX Data 1' },
      { id: 'ESC_TX0_DATA2', name: 'TX0_DATA2', desc: 'TX Data 2' },
      { id: 'ESC_TX0_DATA3', name: 'TX0_DATA3', desc: 'TX Data 3' },
      { id: 'ESC_RX0_CLK', name: 'RX0_CLK', desc: 'RX Clock' },
      { id: 'ESC_RX0_DV', name: 'RX0_DV', desc: 'RX Data Valid' },
      { id: 'ESC_RX0_DATA0', name: 'RX0_DATA0', desc: 'RX Data 0' },
      { id: 'ESC_RX0_DATA1', name: 'RX0_DATA1', desc: 'RX Data 1' },
      { id: 'ESC_RX0_DATA2', name: 'RX0_DATA2', desc: 'RX Data 2' },
      { id: 'ESC_RX0_DATA3', name: 'RX0_DATA3', desc: 'RX Data 3' },
      { id: 'ESC_RX0_ERR', name: 'RX0_ERR', desc: 'RX Error' },
      { id: 'ESC_PHY0_LINKSTATUS', name: 'PHY0_LINK', desc: 'PHY Link Status' },
    ]
  },
  {
    id: 'port1',
    title: 'EtherCAT Port 1 (MII)',
    ...GROUP_COLORS['port1'],
    signals: [
      { id: 'ESC_TX1_CLK', name: 'TX1_CLK', desc: 'Transmit Clock' },
      { id: 'ESC_TX1_ENA', name: 'TX1_ENA', desc: 'Transmit Enable' },
      { id: 'ESC_TX1_DATA0', name: 'TX1_DATA0', desc: 'TX Data 0' },
      { id: 'ESC_TX1_DATA1', name: 'TX1_DATA1', desc: 'TX Data 1' },
      { id: 'ESC_TX1_DATA2', name: 'TX1_DATA2', desc: 'TX Data 2' },
      { id: 'ESC_TX1_DATA3', name: 'TX1_DATA3', desc: 'TX Data 3' },
      { id: 'ESC_RX1_CLK', name: 'RX1_CLK', desc: 'RX Clock' },
      { id: 'ESC_RX1_DV', name: 'RX1_DV', desc: 'RX Data Valid' },
      { id: 'ESC_RX1_DATA0', name: 'RX1_DATA0', desc: 'RX Data 0' },
      { id: 'ESC_RX1_DATA1', name: 'RX1_DATA1', desc: 'RX Data 1' },
      { id: 'ESC_RX1_DATA2', name: 'RX1_DATA2', desc: 'RX Data 2' },
      { id: 'ESC_RX1_DATA3', name: 'RX1_DATA3', desc: 'RX Data 3' },
      { id: 'ESC_RX1_ERR', name: 'RX1_ERR', desc: 'RX Error' },
      { id: 'ESC_PHY1_LINKSTATUS', name: 'PHY1_LINK', desc: 'PHY Link Status' },
    ]
  },
  {
    id: 'common',
    title: 'Common / Management',
    ...GROUP_COLORS['common'],
    signals: [
      { id: 'ESC_MDIO_CLK', name: 'MDIO_CLK', desc: 'Mgt Clock' },
      { id: 'ESC_MDIO_DATA', name: 'MDIO_DATA', desc: 'Mgt Data' },
      { id: 'ESC_PHY_RESETn', name: 'PHY_RESETn', desc: 'PHY Reset (Active Low)' },
      { id: 'ESC_PHY_CLK', name: 'PHY_CLK', desc: 'PHY Clock (25MHz)' },
      { id: 'ESC_I2C_SDA', name: 'I2C_SDA', desc: 'EEPROM SDA' },
      { id: 'ESC_I2C_SCL', name: 'I2C_SCL', desc: 'EEPROM SCL' },
    ]
  },
  {
    id: 'indicators',
    title: 'LED Indicators',
    ...GROUP_COLORS['indicators'],
    signals: [
      { id: 'ESC_LED_RUN', name: 'LED_RUN', desc: 'Run LED' },
      { id: 'ESC_LED_ERR', name: 'LED_ERR', desc: 'Error LED' },
      { id: 'ESC_LED_LINK0_ACTIVE', name: 'LED_LINK0', desc: 'Port 0 Link/Act' },
      { id: 'ESC_LED_LINK1_ACTIVE', name: 'LED_LINK1', desc: 'Port 1 Link/Act' },
    ]
  }
];

const ALL_SIGNALS = SIGNAL_GROUPS.flatMap(g => g.signals.map(s => ({ ...s, groupColor: g.bg, groupTextColor: g.text })));

export default function App() {
  const [pinMapping, setPinMapping] = useState({});
  const [selectedSignalId, setSelectedSignalId] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState(null); // New Group Selection
  const [hoveredBall, setHoveredBall] = useState(null);
  const [isConfigMode, setIsConfigMode] = useState(false); 
  const [showLayers, setShowLayers] = useState(false);

  // Initialize with empty or recommended
  useEffect(() => {
    setPinMapping({});
  }, []);

  const loadPreset = (preset) => {
    // We need to invert the mapping (Ball -> Signal) for the state
    const newMapping = {};
    // Our preset is already Ball -> Signal in the definition above for ease of reading
    // Wait, the definition above is Key=Ball, Value=Signal. Correct.
    setPinMapping(preset);
    setIsConfigMode(true); // Switch to interactive to see results
    setSelectedSignalId(null);
    setSelectedGroupId(null);
  };

  const getSignalById = (id) => ALL_SIGNALS.find(s => s.id === id);
  
  // Helper: Find which group a signal belongs to
  const getGroupForSignal = (signalId) => {
    return SIGNAL_GROUPS.find(g => g.signals.some(s => s.id === signalId));
  };

  const getBallAssignment = (ballId) => {
    const sigId = pinMapping[ballId];
    if (!sigId) return null;
    return getSignalById(sigId);
  };

  const getHardwareLabel = (ballId) => PIN_HARDWARE_MAP[ballId] || '';

  // Calculate Group Highlight Pins (Preview Mode)
  const groupHighlightBalls = useMemo(() => {
    if (!selectedGroupId) return [];
    
    const group = SIGNAL_GROUPS.find(g => g.id === selectedGroupId);
    if (!group) return [];

    const balls = [];
    // For each signal in the group, find ALL its valid balls
    group.signals.forEach(sig => {
      
      const isAssigned = Object.values(pinMapping).includes(sig.id);
      
      if (!isAssigned) {
        // If not assigned, show all valid candidates
        const validGPIOs = VALID_MUX_MAP[sig.id] || [];
        Object.entries(PIN_HARDWARE_MAP).forEach(([ballId, hwLabel]) => {
          const isMatch = validGPIOs.some(gpio => {
              const parts = hwLabel.split(',').map(s => s.trim());
              return parts.includes(gpio);
          });
          if (isMatch) balls.push({ ballId, signalId: sig.id });
        });
      }
    });
    return balls;
  }, [selectedGroupId, pinMapping]);

  // Valid balls for single signal selection (Config Mode)
  const validBallsForSelectedSignal = useMemo(() => {
    if (!selectedSignalId || !isConfigMode) return [];
    
    const validGPIOs = VALID_MUX_MAP[selectedSignalId] || [];
    
    const validBalls = [];
    Object.entries(PIN_HARDWARE_MAP).forEach(([ballId, hwLabel]) => {
      const isMatch = validGPIOs.some(gpio => {
          const parts = hwLabel.split(',').map(s => s.trim());
          return parts.includes(gpio);
      });

      if (isMatch) {
        validBalls.push(ballId);
      }
    });
    return validBalls;
  }, [selectedSignalId, isConfigMode]);

  const handleGroupClick = (groupId) => {
    if (selectedGroupId === groupId) {
      setSelectedGroupId(null); // Toggle off
    } else {
      setSelectedGroupId(groupId);
      setSelectedSignalId(null); // Clear single selection when selecting group
      setIsConfigMode(true); // Auto enter config/preview mode
    }
  };

  const handleSignalClick = (signalId) => {
    setIsConfigMode(true);
    setSelectedSignalId(signalId);
    // Find parent group
    const group = SIGNAL_GROUPS.find(g => g.signals.some(s => s.id === signalId));
    if (group) setSelectedGroupId(group.id);
  };

  const handlePinClick = (ballId) => {
    if (!isConfigMode) return;

    // --- Scenario 1: Group Selection Mode (Auto-detect signal) ---
    if (selectedGroupId && !selectedSignalId) {
      
      // Check if we clicked an already assigned pin
      const currentAssignedSignalId = pinMapping[ballId];
      if (currentAssignedSignalId) {
        // If assigned to a signal in THIS group, unassign it (Toggle Off)
        const group = getGroupForSignal(currentAssignedSignalId);
        if (group && group.id === selectedGroupId) {
           const newMapping = { ...pinMapping };
           delete newMapping[ballId];
           setPinMapping(newMapping);
           return;
        }
      }

      // Check if this pin belongs to ANY signal in the group (Candidate)
      const highlightInfo = groupHighlightBalls.find(h => h.ballId === ballId);
      
      if (highlightInfo) {
        const signalId = highlightInfo.signalId;
        
        // Assign!
        // 1. Remove previous assignment for this signal (Exclusive: one pin per signal)
        const newMapping = { ...pinMapping };
        const prevBall = Object.keys(newMapping).find(key => newMapping[key] === signalId);
        if (prevBall) delete newMapping[prevBall];
        
        // 2. Assign new
        newMapping[ballId] = signalId;
        setPinMapping(newMapping);
        return;
      }
    }

    // --- Scenario 2: Single Signal Selection Mode ---
    if (selectedSignalId) {
      const label = getHardwareLabel(ballId);
      if (isPowerPin(label)) {
        alert(`${label} 是电源或晶振引脚，无法使用。`);
        return;
      }

      const validGPIOs = VALID_MUX_MAP[selectedSignalId];
      if (label && validGPIOs) {
         const parts = label.split(',').map(s => s.trim());
         const isValid = validGPIOs.some(v => parts.includes(v));
         if (!isValid) {
           alert(`错误: 信号 ${selectedSignalId} 不支持引脚 ${label}。`);
           return;
         }
      }

      // Toggle Logic
      if (pinMapping[ballId] === selectedSignalId) {
        // Unassign
        const newMapping = { ...pinMapping };
        delete newMapping[ballId];
        setPinMapping(newMapping);
      } else {
        // Assign
        const newMapping = { ...pinMapping };
        const prevBall = Object.keys(newMapping).find(key => newMapping[key] === selectedSignalId);
        if (prevBall) delete newMapping[prevBall];
        newMapping[ballId] = selectedSignalId;
        setPinMapping(newMapping);
      }
    }
  };

  const handleExport = () => {
    const exportData = {
      mapping: pinMapping,
      pinDetails: Object.keys(pinMapping).map(ball => ({
        ball,
        signal: pinMapping[ball],
        hardwarePinName: getHardwareLabel(ball) || 'Unknown'
      }))
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "ethercat_pin_config.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const getLayerColor = (ringIndex) => {
    const colors = [
      'bg-slate-200', 'bg-slate-300', 'bg-gray-300', 'bg-gray-400',
      'bg-zinc-400', 'bg-zinc-500', 'bg-neutral-500', 'bg-neutral-600',
      'bg-stone-600', 'bg-stone-700'
    ];
    return colors[ringIndex] || 'bg-gray-200';
  };

  const assignedCount = Object.keys(pinMapping).length;
  const totalSignals = ALL_SIGNALS.length;

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-slate-800 font-sans overflow-hidden">
      
      {/* --- Header --- */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm z-10 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="text-blue-600" />
            TMS320F28388D EtherCAT Configurator
            <span className="text-xs font-normal text-gray-500 ml-2 bg-gray-100 px-2 py-1 rounded border border-gray-200">ZWT (337 BGA)</span>
          </h1>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => loadPreset(PRESET_EAST_SOUTH)}
              className="text-xs flex items-center gap-1 px-3 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded hover:bg-emerald-100 transition shadow-sm font-bold"
            >
              <ArrowDownRight size={14} /> 推荐：东/南扇出
            </button>

            <div className="h-6 w-px bg-gray-300 mx-1"></div>

            <button 
              onClick={() => setIsConfigMode(!isConfigMode)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-bold transition-all
                ${isConfigMode 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md ring-2 ring-blue-200' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}
              `}
            >
              {isConfigMode ? <Edit3 size={14} /> : <MousePointer size={14} />}
              {isConfigMode ? "交互配置模式 (ON)" : "浏览模式 (View Only)"}
            </button>

            <button onClick={() => setPinMapping({})} className="text-xs flex items-center gap-1 px-3 py-2 border rounded hover:bg-red-50 text-red-600 border-red-200 transition">
              <RefreshCw size={14} /> 清空
            </button>
            <button onClick={handleExport} className="text-xs flex items-center gap-1 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded shadow-sm transition">
              <Download size={14} /> 导出
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-gray-600 bg-gray-50 px-4 py-2 rounded-md border border-gray-100">
          <div className="flex items-center gap-2">
            <span className="font-bold">配置进度 (Progress):</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${(assignedCount / totalSignals) * 100}%` }}></div>
            </div>
            <span>{assignedCount} / {totalSignals}</span>
          </div>

          {isConfigMode && (
            <div className="flex items-center gap-2 text-blue-700 font-medium ml-auto animate-pulse">
              <Info size={14} />
              {selectedGroupId && !selectedSignalId 
                ? `组选择模式: 点击高亮引脚可自动配置到组内功能。`
                : selectedSignalId 
                  ? `正在配置: ${getSignalById(selectedSignalId)?.name}。` 
                  : "请选择左侧信号或组开始。"}
            </div>
          )}
        </div>
      </header>

      {/* --- Main Content --- */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* --- Sidebar --- */}
        <div className="w-72 bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
          {SIGNAL_GROUPS.map(group => {
            const isGroupSelected = selectedGroupId === group.id;
            return (
              <div key={group.id} className="border-b border-gray-100 last:border-0">
                <div 
                  onClick={() => handleGroupClick(group.id)}
                  className={`
                    px-4 py-3 text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 flex justify-between items-center
                    ${isGroupSelected ? `bg-white text-slate-800 border-l-4 ${group.border} shadow-sm` : `${group.text} bg-gray-50 hover:bg-gray-100 border-l-4 border-transparent`}
                  `}
                >
                  {group.title}
                  {isGroupSelected ? <Eye size={14} className={group.text} /> : <div className="w-4"></div>}
                </div>
                
                <div className={`${isGroupSelected ? 'bg-slate-50' : 'bg-white'}`}>
                  {group.signals.map(signal => {
                    const isAssigned = Object.values(pinMapping).includes(signal.id);
                    const isSelected = selectedSignalId === signal.id;
                    const currentBall = Object.keys(pinMapping).find(key => pinMapping[key] === signal.id);
                    const hwLabel = currentBall ? getHardwareLabel(currentBall) : null;
                    
                    return (
                      <div 
                        key={signal.id}
                        onClick={(e) => { e.stopPropagation(); handleSignalClick(signal.id); }}
                        className={`
                          group flex items-center justify-between px-4 py-2 cursor-pointer border-l-4 transition-colors border-transparent
                          ${isSelected ? `bg-blue-100 !border-blue-600` : 'hover:bg-gray-100'}
                          ${isGroupSelected && !isSelected ? 'opacity-100' : ''} 
                        `}
                      >
                        <div className="flex flex-col">
                          <span className={`text-xs font-medium ${isSelected ? 'text-blue-900' : 'text-gray-700'}`}>{signal.name}</span>
                          {/* Show Valid GPIO Hint */}
                          {(isSelected || isGroupSelected) && isConfigMode && (
                            <span className="text-[9px] text-gray-400 mt-0.5 truncate w-40 block">
                              {VALID_MUX_MAP[signal.id]?.map(g => g.replace('GPIO', '')).join(', ') || 'None'}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {isAssigned ? (
                             <div className="flex flex-col items-end">
                               <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${isSelected ? 'bg-blue-200 text-blue-800' : `${group.bg} text-white`}`}>
                                 {currentBall}
                               </span>
                               {hwLabel && <span className="text-[8px] text-gray-400 mt-0.5 truncate max-w-[50px]">{hwLabel}</span>}
                             </div>
                          ) : (
                            <div className={`w-2 h-2 rounded-full ${isGroupSelected ? 'bg-gray-300' : 'bg-gray-100'}`}></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Grid --- */}
        <div className="flex-1 bg-gray-100 overflow-auto p-8 flex justify-center items-start">
          <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-300 inline-block">
            
            <div className="flex mb-1 ml-5 gap-1">
              {COLS.map(col => (
                <div key={col} className="w-8 h-4 flex justify-center items-end text-[9px] font-bold text-gray-400 select-none">{col}</div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              {ROWS.map((rowName) => (
                <div key={rowName} className="flex items-center gap-1">
                  <div className="w-4 flex justify-end text-[9px] font-bold text-gray-400 select-none mr-1">{rowName}</div>
                  <div className="flex gap-1">
                    {COLS.map(colNum => {
                      const ballId = `${rowName}${colNum}`;
                      const hwLabel = getHardwareLabel(ballId);
                      const isPower = isPowerPin(hwLabel);
                      
                      const assignment = getBallAssignment(ballId);
                      const isAssigned = !!assignment;
                      
                      const ringIndex = getRingIndex(rowName, colNum);

                      const isHovered = hoveredBall === ballId;
                      const isValidCandidate = isConfigMode && selectedSignalId && validBallsForSelectedSignal.includes(ballId);
                      
                      // Check if part of Group Highlight (Preview Mode)
                      const groupHighlightInfo = isConfigMode && selectedGroupId && !selectedSignalId && groupHighlightBalls.find(h => h.ballId === ballId);
                      
                      const isAssignedToCurrentGroup = isAssigned && assignment && SIGNAL_GROUPS.find(g => g.id === selectedGroupId)?.signals.some(s => s.id === assignment.id);

                      let bgClass = "bg-gray-100";
                      let borderClass = "border-gray-200";
                      let textClass = "text-gray-400";
                      let opacityClass = "opacity-100";
                      let scaleClass = "";
                      let ringClass = "";

                      // 1. Base
                      if (isPower) {
                        bgClass = "bg-stripes-gray bg-gray-200"; 
                        textClass = "text-gray-400 font-bold";
                      } else if (showLayers) {
                        bgClass = getLayerColor(ringIndex);
                        textClass = "text-slate-500 opacity-50";
                      } else if (hwLabel) {
                        textClass = "text-slate-600 font-semibold";
                      }

                      // 2. Dimming (Focus Mode)
                      if (isConfigMode && (selectedSignalId || selectedGroupId)) {
                         opacityClass = "opacity-20"; // Make non-relevant pins very dim
                      }

                      // 3. Highlight Logic
                      if (isValidCandidate) {
                        // Single Signal Selection Mode
                        bgClass = "bg-green-100";
                        borderClass = "border-green-500";
                        textClass = "text-green-700 font-bold";
                        ringClass = "ring-2 ring-green-300 ring-offset-1 animate-pulse";
                        scaleClass = "scale-105";
                        opacityClass = "opacity-100";
                      } else if (groupHighlightInfo) {
                        // Group Selection Mode (Preview)
                        // Use Group's Color
                        const groupConfig = GROUP_COLORS[selectedGroupId];
                        
                        if (isAssignedToCurrentGroup) {
                           // Already assigned: Full Opacity, Group Color
                           bgClass = groupConfig.bg;
                           textClass = "text-white";
                           borderClass = "border-transparent";
                           opacityClass = "opacity-100";
                        } else {
                           // Potential candidate: 50% opacity, Group Color Style
                           // We can use a lighter bg for the potential
                           bgClass = groupConfig.bg; 
                           borderClass = groupConfig.border;
                           textClass = "text-white";
                           opacityClass = "opacity-40"; // 40-50% transparency
                           
                           if (isHovered) {
                             opacityClass = "opacity-90";
                             scaleClass = "scale-110";
                             ringClass = `ring-2 ${groupConfig.ring} ring-offset-1`;
                           }
                        }
                      }

                      // 4. Assigned State (Overrides preview colors if not in active group mode)
                      if (isAssigned) {
                        if (!selectedGroupId || (selectedGroupId && !isAssignedToCurrentGroup)) {
                           bgClass = assignment.groupColor;
                           borderClass = "border-transparent";
                           textClass = "text-white opacity-100";
                           opacityClass = "opacity-100";
                           
                           // If focusing on a DIFFERENT group, dim this one
                           if (isConfigMode && selectedGroupId && !isAssignedToCurrentGroup) {
                              opacityClass = "opacity-20";
                           }
                        }
                      }

                      // 5. Active Selection Ring
                      if (isAssigned && pinMapping[ballId] === selectedSignalId) {
                        ringClass = "ring-2 ring-blue-500 ring-offset-1";
                        scaleClass = "scale-110";
                      }

                      // --- Font Size Logic ---
                      let textSizeClass = "text-[6px]";
                      if (hwLabel.length > 15) textSizeClass = "text-[4px] leading-tight";
                      else if (hwLabel.length > 8) textSizeClass = "text-[5px] leading-tight";
                      
                      const content = isAssigned 
                        ? (assignment.name.replace('ESC_', ''))
                        : (hwLabel || ballId); 

                      return (
                        <div
                          key={ballId}
                          onClick={() => handlePinClick(ballId)}
                          onMouseEnter={() => setHoveredBall(ballId)}
                          onMouseLeave={() => setHoveredBall(null)}
                          className={`
                            relative w-8 h-8 rounded-full flex flex-col items-center justify-center transition-all duration-200 overflow-hidden
                            border ${borderClass} ${bgClass} ${opacityClass} ${scaleClass} ${ringClass}
                            ${isHovered && !isPower ? 'scale-110 z-20 shadow-md' : ''}
                            ${isPower ? 'cursor-not-allowed' : 'cursor-pointer'}
                          `}
                        >
                          <div className={`px-0.5 text-center break-words w-full ${textSizeClass} ${textClass}`}>
                             {content}
                          </div>
                          {isPower && <Ban size={12} className="text-red-500 opacity-20 absolute" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* --- Tooltip --- */}
            {hoveredBall && (
              <div className="absolute bottom-4 left-4 pointer-events-none z-30">
                <div className="bg-slate-800 text-white text-xs rounded-lg shadow-xl p-3 w-64 opacity-95 border border-slate-700">
                  <div className="flex justify-between items-center mb-1 border-b border-slate-600 pb-1">
                    <span className="font-bold text-slate-200 flex items-center gap-2">
                      Ball {hoveredBall}
                      {isPowerPin(getHardwareLabel(hoveredBall)) && <span className="bg-red-500 text-white text-[9px] px-1 rounded">POWER</span>}
                    </span>
                    <span className="text-[10px] bg-slate-600 px-1.5 rounded text-slate-300">Ring {getRingIndex(hoveredBall.charAt(0), parseInt(hoveredBall.slice(1)))}</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-slate-400 text-[10px] uppercase tracking-wide">Hardware Function</span>
                    <div className="font-mono text-sm font-bold text-yellow-400 break-words">
                      {getHardwareLabel(hoveredBall) || "Unmapped / Generic GPIO"}
                    </div>
                  </div>
                  
                  {getBallAssignment(hoveredBall) ? (
                    <div className="border-t border-slate-600 pt-2 mt-1">
                      <span className="text-slate-400 text-[10px]">Current Assignment</span>
                      <div className={`font-bold text-sm ${getBallAssignment(hoveredBall).groupTextColor.replace('text-', 'text-white ')}`}>
                        {getBallAssignment(hoveredBall).name}
                      </div>
                    </div>
                  ) : (
                    <div className="text-slate-500 italic text-[10px] mt-1">Free / Unassigned</div>
                  )}

                  {/* Contextual Help for Config Mode */}
                  {isConfigMode && selectedGroupId && !selectedSignalId && groupHighlightBalls.some(h => h.ballId === hoveredBall) && (
                     <div className="mt-2 text-white text-[10px] font-bold flex flex-col gap-1 bg-white/10 p-1.5 rounded">
                       <div className="flex items-center gap-1 text-green-300"><CheckCircle size={10} /> 点击以配置:</div>
                       <div>{getSignalById(groupHighlightBalls.find(h => h.ballId === hoveredBall)?.signalId)?.name}</div>
                     </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}