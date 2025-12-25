import React, { useState } from 'react';
import { Ban, CheckCircle, Zap, RotateCcw, Cpu, Undo, Download, Table, X } from 'lucide-react';

// ==========================================
// 1. PIN_HARDWARE_MAP (The Physical Pinout)
// ==========================================
const PIN_HARDWARE_MAP = {
  "W1": "VSSA", "W2": "ADCINB1, DACOUTC", "W3": "ADCINB3, CMPIN3N", "W4": "ADCINB5", "W5": "VREFHIB", "W6": "VREFLOD", "W7": "VSS", "W8": "VDDIO", "W9": "GPIO128", "W10": "GPIO116", "W11": "GPIO29", "W12": "FLT1", "W13": "TDI", "W14": "TMS", "W15": "TDO", "W16": "GPIO121", "W17": "GPIO39", "W18": "GPIO132", "W19": "VSS",
  "V1": "VREFHIA", "V2": "ADCINB0, VDAC", "V3": "ADCINB2, CMPIN3P", "V4": "ADCINB4", "V5": "VREFHID", "V6": "VREFLOB", "V7": "VSSA", "V8": "GPIO124", "V9": "GPIO127", "V10": "GPIO131", "V11": "GPIO28", "V12": "GPIO115", "V13": "FLT2", "V14": "TRSTn", "V15": "TCK", "V16": "GPIO36", "V17": "GPIO40", "V18": "GPIO134", "V19": "VDDIO",
  "U1": "ADCINA0, DACOUTA", "U2": "ADCINA2, CMPIN1P", "U3": "ADCINA4, CMPIN2P", "U4": "ADCIN15, CMPIN4N", "U5": "ADCIND1, CMPIN7N", "U6": "ADCIND3, CMPIN8N", "U7": "ADCIND5", "U8": "GPIO123", "U9": "GPIO126", "U10": "GPIO130", "U11": "GPIO31", "U12": "GPIO117", "U13": "GPIO32", "U14": "GPIO34", "U15": "GPIO120", "U16": "GPIO37", "U17": "GPIO41", "U18": "GPIO135", "U19": "ERRORSTS",
  "T1": "ADCINA1, DACOUTB", "T2": "ADCINA3, CMPIN1N", "T3": "ADCINA5, CMPIN2N", "T4": "ADCIN14, CMPIN4P", "T5": "ADCIND0, CMPIN7P", "T6": "ADCIND2, CMPIN8P", "T7": "ADCIND4", "T8": "GPIO122", "T9": "GPIO125", "T10": "GPIO129", "T11": "GPIO30", "T12": "GPIO118", "T13": "GPIO33", "T14": "GPIO35", "T15": "GPIO119", "T16": "GPIO38", "T17": "GPIO136", "T18": "GPIO137", "T19": "GPIO138",
  "R1": "VREFHIC", "R2": "VREFLOA", "R3": "ADCINC2, CMPIN6P", "R4": "ADCINC4, CMPIN5P", "R5": "VSSA", "R6": "VDDA", "R7": "VSS", "R8": "VSS", "R9": "VDDIO", "R10": "VDD", "R11": "VDD3VFL", "R12": "VDD3VFL", "R13": "VDD", "R14": "VSS", "R15": "VSS", "R16": "GPIO48", "R17": "GPIO49", "R18": "GPIO50", "R19": "GPIO51",
  "P1": "VSSA", "P2": "VREFLOC", "P3": "ADCINC3, CMPIN6N", "P4": "ADCINC5, CMPIN5N", "P5": "VSSA", "P6": "VDDA", "P7": "VSS", "P8": "VSS", "P9": "VDDIO", "P10": "VDD", "P11": "VSS", "P12": "VSS", "P13": "VDD", "P14": "VSS", "P15": "VSS", "P16": "GPIO52", "P17": "GPIO53", "P18": "GPIO54", "P19": "GPIO55",
  "N1": "VSS", "N2": "GPIO109", "N3": "GPIO114", "N4": "GPIO113", "N5": "VSS", "N6": "VSS", "N14": "VDDIO", "N15": "VDDIO", "N16": "GPIO56", "N17": "GPIO58", "N18": "GPIO57", "N19": "GPIO139",
  "M1": "VDDIO", "M2": "GPIO110", "M3": "GPIO112", "M4": "GPIO111", "M5": "VDDIO", "M6": "VDDIO", "M8": "VSS", "M9": "VSS", "M10": "VSS", "M11": "VSS", "M12": "VSS", "M14": "VSS", "M15": "VSS", "M16": "GPIO59", "M17": "GPIO60", "M18": "GPIO141", "M19": "GPIO140",
  "L1": "GPIO27", "L2": "GPIO106", "L3": "GPIO107", "L4": "GPIO108", "L5": "VSS", "L6": "VSS", "L8": "VSS", "L9": "VSS", "L10": "VSS", "L11": "VSS", "L12": "VSS", "L14": "VDDIO", "L15": "VDDIO", "L16": "GPIO61", "L17": "GPIO64", "L18": "VSS", "L19": "GPIO142",
  "K1": "GPIO26", "K2": "GPIO25", "K3": "GPIO24", "K4": "GPIO23", "K5": "VDD", "K6": "VDD", "K8": "VSS", "K9": "VSS", "K10": "VSS", "K11": "VSS", "K12": "VSS", "K14": "VSS", "K15": "VSS", "K16": "GPIO65", "K17": "GPIO66", "K18": "GPIO44", "K19": "GPIO45",
  "J1": "GPIO103", "J2": "GPIO104", "J3": "GPIO105", "J4": "GPIO22", "J5": "VSS", "J6": "VSS", "J8": "VSS", "J9": "VSS", "J10": "VSS", "J11": "VSS", "J12": "VSS", "J14": "VDD", "J15": "VDD", "J16": "GPIO63", "J17": "GPIO62", "J18": "NC", "J19": "X2",
  "H1": "GPIO100", "H2": "GPIO101", "H3": "GPIO102", "H4": "NC", "H5": "VDDIO", "H6": "VDDIO", "H8": "VSS", "H9": "VSS", "H10": "VSS", "H11": "VSS", "H12": "VSS", "H14": "VSS", "H15": "VSS", "H16": "VDDOSC", "H17": "VDDOSC", "H18": "VSSOSC", "H19": "VSSOSC",
  "G1": "GPIO99", "G2": "GPIO8", "G3": "GPIO9", "G4": "VDDIO", "G5": "VDDIO", "G6": "VDDIO", "G14": "VDD", "G15": "VDD", "G16": "VSS", "G17": "VSS", "G18": "GPIO133", "G19": "X1",
  "F1": "GPIO98", "F2": "GPIO20", "F3": "GPIO21", "F4": "VDDIO", "F5": "VSS", "F6": "VSS", "F7": "VDDIO", "F8": "VSS", "F9": "VDD", "F10": "VDDIO", "F11": 'VDD', "F12": 'VSS', "F13": "VDDIO", "F14": "VSS", "F15": "VSS", "F16": "VDDIO", "F17": "GPIO144", "F18": "GPIO143", "F19": "XRSn",
  "E1": "GPIO16", "E2": "GPIO17", "E3": "GPIO18", "E4": "GPIO19", "E5": "VSS", "E6": "VSS", "E7": "VDDIO", "E8": "VSS", "E9": "VDD", "E10": "VDDIO", "E11": "VDD", "E12": "VSS", "E13": "VDDIO", "E14": "VSS", "E15": "VSS", "E16": "VDDIO", "E17": "GPIO145", "E18": "GPIO47", "E19": "GPIO46",
  "D1": "GPIO13", "D2": "GPIO14", "D3": "GPIO15", "D4": "GPIO168", "D5": "GPIO166", "D6": "GPIO89", "D7": "GPIO5", "D8": "GPIO1", "D9": "GPIO162", "D10": "GPIO159", "D11": "GPIO87", "D12": "GPIO156", "D13": "GPIO152", "D14": "GPIO148", "D15": "GPIO80", "D16": "GPIO75", "D17": "GPIO147", "D18": "GPIO146", "D19": "GPIO42",
  "C1": "GPIO11", "C2": "GPIO12", "C3": "GPIO96", "C4": "GPIO167", "C5": "GPIO165", "C6": 'GPIO88', "C7": 'GPIO4', "C8": 'GPIO0', "C9": 'GPIO161', "C10": 'GPIO158', "C11": 'GPIO86', "C12": 'GPIO155', "C13": 'GPIO151', "C14": 'GPIO83', "C15": 'GPIO79', "C16": 'GPIO76', "C17": 'GPIO74', "C18": 'GPIO68', "C19": 'GPIO43',
  "B1": "VDDIO", "B2": "GPIO10", "B3": "GPIO95", "B4": "GPIO93", "B5": "GPIO91", "B6": "GPIO7", "B7": "GPIO3", "B8": "GPIO164", "B9": "GPIO160", "B10": "GPIO157", "B11": "GPIO85", "B12": "GPIO154", "B13": "GPIO150", "B14": "GPIO82", "B15": "GPIO78", "B16": "GPIO72", "B17": "GPIO71", "B18": "GPIO69", "B19": "GPIO67",
  "A1": "VSS", "A2": "GPIO97", "A3": "GPIO94", "A4": "GPIO92", "A5": "GPIO90", "A6": "GPIO6", "A7": "GPIO2", "A8": "GPIO163", "A9": "VDDIO", "A10": "VSS", "A11": "GPIO84", "A12": "GPIO153", "A13": "GPIO149", "A14": "GPIO81", "A15": "GPIO77", "A16": "GPIO73", "A17": "GPIO70", "A18": "VDDIO", "A19": "VSS"
};

// ==========================================
// 2. VALID_MUX_MAP (The Signal Logic)
// ==========================================
const VALID_MUX_MAP = {
  "ESC_TX0_CLK": ["GPIO85", "GPIO157"], "ESC_TX0_ENA": ["GPIO84", "GPIO156"], "ESC_TX0_DATA0": ["GPIO87", "GPIO158"], "ESC_TX0_DATA1": ["GPIO88", "GPIO159"], "ESC_TX0_DATA2": ["GPIO89", "GPIO160"], "ESC_TX0_DATA3": ["GPIO90", "GPIO161"], "ESC_RX0_CLK": ["GPIO77", "GPIO163"], "ESC_RX0_DV": ["GPIO78", "GPIO162"], "ESC_RX0_DATA0": ["GPIO80", "GPIO165"], "ESC_RX0_DATA1": ["GPIO81", "GPIO166"], "ESC_RX0_DATA2": ["GPIO82", "GPIO167"], "ESC_RX0_DATA3": ["GPIO83", "GPIO168"], "ESC_RX0_ERR": ["GPIO79", "GPIO164"], "ESC_PHY0_LINKSTATUS": ["GPIO86", "GPIO148"],
  "ESC_TX1_CLK": ["GPIO44", "GPIO130"], "ESC_TX1_ENA": ["GPIO45", "GPIO129"], "ESC_TX1_DATA0": ["GPIO75", "GPIO131"], "ESC_TX1_DATA1": ["GPIO74", "GPIO132"], "ESC_TX1_DATA2": ["GPIO73", "GPIO134"], "ESC_TX1_DATA3": ["GPIO72", "GPIO135"], "ESC_RX1_CLK": ["GPIO69", "GPIO137"], "ESC_RX1_DV": ["GPIO70", "GPIO136"], "ESC_RX1_DATA0": ["GPIO63", "GPIO139"], "ESC_RX1_DATA1": ["GPIO64", "GPIO140"], "ESC_RX1_DATA2": ["GPIO65", "GPIO141"], "ESC_RX1_DATA3": ["GPIO66", "GPIO142"], "ESC_RX1_ERR": ["GPIO71", "GPIO138"], "ESC_PHY1_LINKSTATUS": ["GPIO68", "GPIO149"],
  "ESC_MDIO_CLK": ["GPIO26", "GPIO46", "GPIO152"], "ESC_MDIO_DATA": ["GPIO27", "GPIO47", "GPIO153"], "ESC_PHY_RESETn": ["GPIO76", "GPIO155"], "ESC_PHY_CLK": ["GPIO48", "GPIO154"], "ESC_I2C_SDA": ["GPIO29", "GPIO40", "GPIO150"], "ESC_I2C_SCL": ["GPIO30", "GPIO41", "GPIO151"], "ESC_LED_RUN": ["GPIO61", "GPIO146"], "ESC_LED_ERR": ["GPIO60", "GPIO145"], "ESC_LED_LINK0_ACTIVE": ["GPIO58", "GPIO143"], "ESC_LED_LINK1_ACTIVE": ["GPIO59", "GPIO144"]
};

// ==========================================
// 3. PRESET_EAST_SOUTH (The Recommended Layout)
// ==========================================
const PRESET_EAST_SOUTH = {
  "B11": "ESC_TX0_CLK", "A11": "ESC_TX0_ENA", "D11": "ESC_TX0_DATA0", "D10": "ESC_TX0_DATA1", "B9": "ESC_TX0_DATA2", "C9": "ESC_TX0_DATA3", "A15": "ESC_RX0_CLK", "B15": "ESC_RX0_DV", "D15": "ESC_RX0_DATA0", "A14": "ESC_RX0_DATA1", "B14": "ESC_RX0_DATA2", "C14": "ESC_RX0_DATA3", "C15": "ESC_RX0_ERR", "D14": "ESC_PHY0_LINKSTATUS",
  "K18": "ESC_TX1_CLK", "K19": "ESC_TX1_ENA", "D16": "ESC_TX1_DATA0", "C17": "ESC_TX1_DATA1", "A16": "ESC_TX1_DATA2", "B16": "ESC_TX1_DATA3", "B18": "ESC_RX1_CLK", "A17": "ESC_RX1_DV", "J16": "ESC_RX1_DATA0", "L17": "ESC_RX1_DATA1", "K16": "ESC_RX1_DATA2", "K17": "ESC_RX1_DATA3", "B17": "ESC_RX1_ERR", "C18": "ESC_PHY1_LINKSTATUS",
  "E19": "ESC_MDIO_CLK", "E18": "ESC_MDIO_DATA", "C16": "ESC_PHY_RESETn", "R16": "ESC_PHY_CLK", "B13": "ESC_I2C_SDA", "C13": "ESC_I2C_SCL", "L16": "ESC_LED_RUN", "M17": "ESC_LED_ERR", "F18": "ESC_LED_LINK0_ACTIVE", "F17": "ESC_LED_LINK1_ACTIVE"
};

// ==========================================
// CONFIGURATION & GROUPS
// ==========================================
const SIGNAL_GROUPS = [
  {
    id: "port0",
    name: "EtherCAT Port 0",
    color: "blue",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-500",
    textColor: "text-blue-700",
    signals: [
      "ESC_TX0_CLK", "ESC_TX0_ENA", "ESC_TX0_DATA0", "ESC_TX0_DATA1", "ESC_TX0_DATA2", "ESC_TX0_DATA3",
      "ESC_RX0_CLK", "ESC_RX0_DV", "ESC_RX0_DATA0", "ESC_RX0_DATA1", "ESC_RX0_DATA2", "ESC_RX0_DATA3",
      "ESC_RX0_ERR", "ESC_PHY0_LINKSTATUS"
    ]
  },
  {
    id: "port1",
    name: "EtherCAT Port 1",
    color: "orange",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-500",
    textColor: "text-orange-700",
    signals: [
      "ESC_TX1_CLK", "ESC_TX1_ENA", "ESC_TX1_DATA0", "ESC_TX1_DATA1", "ESC_TX1_DATA2", "ESC_TX1_DATA3",
      "ESC_RX1_CLK", "ESC_RX1_DV", "ESC_RX1_DATA0", "ESC_RX1_DATA1", "ESC_RX1_DATA2", "ESC_RX1_DATA3",
      "ESC_RX1_ERR", "ESC_PHY1_LINKSTATUS"
    ]
  },
  {
    id: "common",
    name: "Common / Management",
    color: "emerald",
    borderColor: "border-emerald-500",
    bgColor: "bg-emerald-500",
    textColor: "text-emerald-700",
    signals: ["ESC_MDIO_CLK", "ESC_MDIO_DATA", "ESC_PHY_RESETn", "ESC_PHY_CLK", "ESC_I2C_SDA", "ESC_I2C_SCL"]
  },
  {
    id: "leds",
    name: "LED Indicators",
    color: "purple",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-500",
    textColor: "text-purple-700",
    signals: ["ESC_LED_RUN", "ESC_LED_ERR", "ESC_LED_LINK0_ACTIVE", "ESC_LED_LINK1_ACTIVE"]
  }
];

// Helper to determine Signal Colors
const getSignalColor = (signalName) => {
  const group = SIGNAL_GROUPS.find(g => g.signals.includes(signalName));
  return group ? group.color : 'gray';
};

// Row/Col definitions strictly from BGA standard (minus letters I, O, Q, S, X, Z - matching PIN_HARDWARE_MAP keys)
const ROWS = ['W', 'V', 'U', 'T', 'R', 'P', 'N', 'M', 'L', 'K', 'J', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
const COLS = Array.from({ length: 19 }, (_, i) => i + 1);

// Power/Ground/Protected pin detection
const isPowerPin = (name) => {
  const n = name.toUpperCase();
  return n.startsWith('VDD') || n.startsWith('VSS') || n.startsWith('VREF') || n.startsWith('X1') || n.startsWith('X2') || n.startsWith('NC') || n.startsWith('TRST');
};

export default function App() {
  const [assignments, setAssignments] = useState({});
  const [selectedGroup, setSelectedGroup] = useState(null); // ID of selected group
  const [selectedSignal, setSelectedSignal] = useState(null); // Name of selected signal
  const [showSummary, setShowSummary] = useState(false); // Modal State

  // --- Undo Logic ---
  const [history, setHistory] = useState([{}]); // Initial state empty
  const [historyIndex, setHistoryIndex] = useState(0);

  const updateAssignments = (newAssignments) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newAssignments);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setAssignments(newAssignments);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setAssignments(history[prevIndex]);
      setHistoryIndex(prevIndex);
    }
  };

  // --- Actions ---

  const handleGroupSelect = (groupId) => {
    if (selectedGroup === groupId) {
      setSelectedGroup(null); // Toggle off if already selected
    } else {
      setSelectedGroup(groupId);
    }
    setSelectedSignal(null); // Exit signal config mode
  };

  const handleSignalSelect = (signalName, groupId) => {
    setSelectedSignal(signalName);
    setSelectedGroup(groupId); // Keep parent group active context
  };

  const applyPreset = () => {
    updateAssignments(PRESET_EAST_SOUTH);
    setSelectedGroup(null);
    setSelectedSignal(null);
  };

  const clearAssignments = () => {
    updateAssignments({});
  };

  const handleDownload = () => {
    const detailedAssignments = Object.entries(assignments).map(([ballId, signal]) => {
      const hardwareName = PIN_HARDWARE_MAP[ballId] || "";
      const validGpios = VALID_MUX_MAP[signal] || [];
      // Determine which GPIO is being used based on the hardware map
      const usedGpio = validGpios.find(gpio => hardwareName.includes(gpio)) || "N/A";
      
      return {
        ball_id: ballId,
        signal_name: signal,
        gpio_pin: usedGpio,
        hardware_label: hardwareName
      };
    });

    const exportData = {
      device: "TMS320F28388D ZWT",
      timestamp: new Date().toISOString(),
      configuration: detailedAssignments
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "ethercat_config.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // --- Interaction Logic ---

  const handlePinClick = (ballId, pinName) => {
    if (isPowerPin(pinName)) return;
    
    // Copy current state for modification
    let newAssignments = { ...assignments };
    let didChange = false;

    // 1. Single Signal Config Mode
    if (selectedSignal) {
      const validPins = VALID_MUX_MAP[selectedSignal] || [];
      const hardwareCapabilities = pinName.split(',').map(s => s.trim());
      const isValid = hardwareCapabilities.some(cap => validPins.includes(cap));

      if (isValid) {
        if (assignments[ballId] === selectedSignal) {
          delete newAssignments[ballId];
          didChange = true;
        } else {
          // Remove selectedSignal from any OTHER pin it might be on (Exclusivity)
          const existingPin = Object.keys(newAssignments).find(key => newAssignments[key] === selectedSignal);
          if (existingPin) delete newAssignments[existingPin];

          newAssignments[ballId] = selectedSignal;
          didChange = true;
        }
      }
    }

    // 2. Group Mode
    else if (selectedGroup) {
      const group = SIGNAL_GROUPS.find(g => g.id === selectedGroup);
      if (group) {
        const hardwareCapabilities = pinName.split(',').map(s => s.trim());
        
        let foundSignal = null;
        for (const sig of group.signals) {
          const validGPIOs = VALID_MUX_MAP[sig] || [];
          if (hardwareCapabilities.some(cap => validGPIOs.includes(cap))) {
            // Priority: If this pin already holds this signal, toggle it.
            // If not, only grab it if the signal isn't assigned elsewhere (OR if we decide to steal it, but simple group clicks usually fill holes)
            // For now, simple find:
            foundSignal = sig;
            break; 
          }
        }

        if (foundSignal) {
          if (assignments[ballId] === foundSignal) {
            delete newAssignments[ballId];
            didChange = true;
          } else {
            // Check if foundSignal is already assigned elsewhere. If so, move it here.
            const existingPin = Object.keys(newAssignments).find(key => newAssignments[key] === foundSignal);
            if (existingPin) delete newAssignments[existingPin];

            newAssignments[ballId] = foundSignal;
            didChange = true;
          }
        }
      }
    }

    if (didChange) {
      updateAssignments(newAssignments);
    }
  };

  // --- Helper to styles ---
  
  const getPinState = (ballId, pinName) => {
    const assignedSignal = assignments[ballId];
    const isPower = isPowerPin(pinName);

    // Default State
    let state = {
      bg: isPower ? 'bg-gray-200' : 'bg-white',
      border: isPower ? 'border-gray-300' : 'border-gray-300',
      opacity: 'opacity-100',
      cursor: isPower ? 'cursor-not-allowed' : 'cursor-pointer',
      text: 'text-gray-500',
      content: pinName
    };

    // Helper: Is a signal already assigned anywhere?
    const isSignalAssigned = (sig) => Object.values(assignments).includes(sig);

    // Mode: Signal Selection
    if (selectedSignal) {
      const validGPIOs = VALID_MUX_MAP[selectedSignal];
      const hardwareCapabilities = pinName.split(',').map(s => s.trim());
      const isCandidate = hardwareCapabilities.some(cap => validGPIOs.includes(cap));
      const signalIsTaken = isSignalAssigned(selectedSignal);

      if (assignedSignal === selectedSignal) {
        // Current signal assigned here
        const color = getSignalColor(selectedSignal);
        state.bg = `bg-${color}-500`;
        state.text = 'text-white font-bold';
        state.content = selectedSignal;
        state.border = `border-${color}-700 ring-2 ring-${color}-400`;
      } else if (isCandidate && !signalIsTaken) {
        // Valid candidate slot (only if signal not already assigned)
        state.bg = 'bg-yellow-100';
        state.border = 'border-yellow-500 border-dashed border-2';
        state.text = 'text-gray-900 font-semibold';
      } else if (assignedSignal) {
         // NEW: Show other assignments ghosted
         const otherColor = getSignalColor(assignedSignal);
         state.bg = `bg-${otherColor}-500`;
         state.text = 'text-white font-bold';
         state.content = assignedSignal;
         state.border = `border-${otherColor}-700`;
         state.opacity = 'opacity-50';
      } else {
        // Irrelevant pin
        state.opacity = 'opacity-30';
      }
    } 
    // Mode: Group Selection
    else if (selectedGroup) {
      const group = SIGNAL_GROUPS.find(g => g.id === selectedGroup);
      const hardwareCapabilities = pinName.split(',').map(s => s.trim());
      
      // Is this pin already assigned to something in this group?
      const isAssignedToGroup = assignedSignal && group.signals.includes(assignedSignal);
      
      // Is this pin capable of ANY signal in this group that is NOT YET ASSIGNED?
      let isCandidateForGroup = false;
      
      if (!isAssignedToGroup) {
        for (const sig of group.signals) {
           const validGPIOs = VALID_MUX_MAP[sig] || [];
           if (hardwareCapabilities.some(cap => validGPIOs.includes(cap))) {
             // Only show as candidate if this signal is FREE
             if (!isSignalAssigned(sig)) {
                isCandidateForGroup = true;
                break;
             }
           }
        }
      }

      if (isAssignedToGroup) {
        const color = group.color;
        state.bg = `bg-${color}-500`;
        state.text = 'text-white font-bold';
        state.content = assignedSignal;
        state.border = `border-${color}-700`;
      } else if (isCandidateForGroup) {
        const color = group.color;
        state.bg = `bg-${color}-50`;
        state.border = `border-${color}-300 border-2`;
        state.text = `text-${color}-900`;
      } else if (assignedSignal) {
        // NEW: Show assigned pins from OTHER groups as transparent
        const otherColor = getSignalColor(assignedSignal);
        state.bg = `bg-${otherColor}-500`;
        state.text = 'text-white font-bold';
        state.content = assignedSignal;
        state.border = `border-${otherColor}-700`;
        state.opacity = 'opacity-50';
      } else {
         state.opacity = 'opacity-30';
      }
    }
    // Mode: Idle (Just show assignments)
    else {
      if (assignedSignal) {
        const color = getSignalColor(assignedSignal);
        state.bg = `bg-${color}-500`;
        state.text = 'text-white font-bold';
        state.content = assignedSignal;
        state.border = `border-${color}-700`;
      }
    }

    return state;
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 text-xs font-sans overflow-hidden relative">
      
      {/* --- Sidebar --- */}
      <div className="w-80 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto flex flex-col shadow-lg z-10">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-blue-600" />
            EtherCAT Config
          </h1>
          <p className="text-gray-500 text-[10px] mt-1">TMS320F28388D ZWT (337-Ball BGA)</p>
          
          <div className="flex gap-2 mt-4 flex-wrap">
             <button 
              onClick={applyPreset}
              className="flex-1 flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded shadow-sm transition-colors text-xs"
             >
               <Zap className="w-3 h-3" /> Preset
             </button>
             
             <button 
              onClick={handleUndo}
              disabled={historyIndex <= 0}
              className={`px-3 py-2 rounded border flex items-center justify-center ${historyIndex > 0 ? 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300' : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'}`}
              title="Undo"
             >
               <Undo className="w-4 h-4" />
             </button>

             <button 
              onClick={clearAssignments}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded border border-gray-300 flex items-center justify-center"
              title="Clear All"
             >
               <RotateCcw className="w-4 h-4" />
             </button>
          </div>
          <div className="flex gap-2 mt-2">
             <button
               onClick={() => setShowSummary(true)}
               className="flex-1 flex items-center justify-center gap-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-1.5 px-3 rounded text-xs"
             >
                <Table className="w-3 h-3" /> Summary
             </button>
             <button
               onClick={handleDownload}
               className="flex-1 flex items-center justify-center gap-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-1.5 px-3 rounded text-xs"
             >
                <Download className="w-3 h-3" /> Save
             </button>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-6">
          {SIGNAL_GROUPS.map(group => {
            const isGroupActive = selectedGroup === group.id;
            
            // Calculate usage stats
            const usedCount = group.signals.reduce((acc, sig) => 
              acc + (Object.values(assignments).includes(sig) ? 1 : 0), 0
            );
            const totalCount = group.signals.length;
            const allAssigned = usedCount === totalCount;

            return (
              <div key={group.id} className={`rounded-lg border ${isGroupActive ? 'border-2 ' + group.borderColor : 'border-gray-200'} transition-all`}>
                <div 
                  onClick={() => handleGroupSelect(group.id)}
                  className={`p-3 cursor-pointer flex justify-between items-center ${isGroupActive ? group.bgColor + ' bg-opacity-10' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <span className={`font-bold ${group.textColor}`}>{group.name}</span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-gray-200 text-gray-500">
                    {usedCount}/{totalCount}
                  </span>
                </div>
                
                <div className="p-2 space-y-1">
                  {group.signals.map(sig => {
                    const isAssigned = Object.values(assignments).includes(sig);
                    const isSigSelected = selectedSignal === sig;

                    return (
                      <button
                        key={sig}
                        onClick={(e) => { e.stopPropagation(); handleSignalSelect(sig, group.id); }}
                        className={`w-full text-left px-2 py-1.5 rounded flex items-center justify-between text-[11px] transition-colors
                          ${isSigSelected 
                            ? `${group.bgColor} text-white shadow-sm` 
                            : isAssigned 
                              ? 'bg-gray-100 text-gray-400 line-through' 
                              : 'hover:bg-gray-100 text-gray-600'
                          }
                        `}
                      >
                        <span className="truncate">{sig}</span>
                        {isAssigned && !isSigSelected && <CheckCircle className="w-3 h-3 text-green-500" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- Main Grid Area --- */}
      <div className="flex-1 overflow-auto bg-gray-100 p-8 flex flex-col items-center">
        
        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-300 inline-block relative">
          
          {/* Top Label */}
          <div className="absolute top-2 left-6 text-gray-400 font-mono font-bold">TOP (ROW W)</div>
          
          <div className="grid gap-1" style={{ gridTemplateColumns: `auto repeat(19, minmax(36px, 1fr))` }}>
            
            {/* Header Row (Numbers 1-19) */}
            <div className="h-8 w-8"></div> {/* Corner spacer */}
            {COLS.map(col => (
               <div key={col} className="h-8 flex items-center justify-center font-bold text-gray-400 select-none">
                 {col}
               </div>
            ))}

            {/* Grid Rows */}
            {ROWS.map(row => (
              <React.Fragment key={row}>
                {/* Row Label (Letters) */}
                <div className="w-8 flex items-center justify-center font-bold text-gray-400 select-none">
                  {row}
                </div>

                {/* Cells */}
                {COLS.map(col => {
                  const ballId = `${row}${col}`;
                  const pinName = PIN_HARDWARE_MAP[ballId] || "NC";
                  const state = getPinState(ballId, pinName);
                  const isPower = isPowerPin(pinName);

                  // Dynamic text sizing
                  const isTiny = state.content.length > 8;

                  return (
                    <div
                      key={ballId}
                      onClick={() => handlePinClick(ballId, pinName)}
                      className={`
                        w-10 h-10 rounded-full border flex flex-col items-center justify-center text-center transition-all duration-150 relative group
                        ${state.bg} ${state.border} ${state.opacity} ${state.cursor} ${state.text}
                        shadow-sm hover:shadow-md hover:z-10 hover:scale-110
                      `}
                    >
                      {/* Icon overlay for power/ban */}
                      {isPower && (
                         <Ban className="w-4 h-4 text-gray-400 absolute opacity-0 group-hover:opacity-50" />
                      )}
                      
                      <span className={`pointer-events-none leading-tight px-0.5 break-words ${isTiny ? 'text-[6px]' : 'text-[8px]'}`}>
                        {state.content}
                      </span>

                      {/* Tooltip on Hover */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                         <div className="font-bold">{ballId}: {pinName}</div>
                         {assignments[ballId] && <div className="text-gray-300">Assigned: {assignments[ballId]}</div>}
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
          
          {/* Bottom Label */}
          <div className="absolute bottom-2 left-6 text-gray-400 font-mono font-bold">BOTTOM (ROW A)</div>

        </div>
        
        <div className="mt-6 text-gray-400 text-xs max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span> Port 0
            <span className="w-3 h-3 bg-orange-500 rounded-full inline-block ml-2"></span> Port 1
            <span className="w-3 h-3 bg-emerald-500 rounded-full inline-block ml-2"></span> Common
            <span className="w-3 h-3 bg-purple-500 rounded-full inline-block ml-2"></span> LEDs
          </p>
          <p className="mt-2">Select a group to see all candidates, or select a signal to configure specifically. Pins labeled VDD/VSS are protected.</p>
        </div>

      </div>

      {/* --- Summary Modal --- */}
      {showSummary && (
        <div className="absolute inset-0 z-50 bg-black/50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl w-[600px] max-h-[80vh] flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Table className="w-5 h-5 text-gray-500" />
                Configuration Summary
              </h2>
              <button 
                onClick={() => setShowSummary(false)} 
                className="text-gray-500 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="overflow-y-auto flex-1 p-4">
              <div className="space-y-6">
                {SIGNAL_GROUPS.map(group => {
                  const groupAssignments = Object.entries(assignments).filter(([_, signal]) => 
                    group.signals.includes(signal)
                  );

                  return (
                    <div key={group.id}>
                      <h3 className={`font-bold ${group.textColor} border-b border-gray-200 pb-1 mb-2`}>
                        {group.name}
                      </h3>
                      {groupAssignments.length === 0 ? (
                        <div className="text-gray-400 text-xs italic pl-2">
                          No signals assigned.
                        </div>
                      ) : (
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="text-gray-500">
                              <th className="font-medium pb-2">Signal</th>
                              <th className="font-medium pb-2">Ball ID</th>
                              <th className="font-medium pb-2">Hardware Name</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {groupAssignments.map(([ballId, signal]) => (
                              <tr key={signal}>
                                <td className="py-1.5 font-medium">{signal}</td>
                                <td className="py-1.5 text-gray-600 font-mono">{ballId}</td>
                                <td className="py-1.5 text-gray-500">{PIN_HARDWARE_MAP[ballId]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-2">
              <button 
                onClick={() => setShowSummary(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded text-xs"
              >
                Close
              </button>
              <button 
                onClick={handleDownload}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow text-xs flex items-center gap-1"
              >
                <Download className="w-3 h-3" /> Download JSON
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}