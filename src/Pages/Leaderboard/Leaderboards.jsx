import React, { useState } from "react";

const Leaderboards = () => {
  const [filters, setFilters] = useState({
    period: "Last month",
    country: "All",
    badge: "None",
    hideUnavailable: false,
  });

  const traders = [
    {
    id: 1,
    username: "IngridMartingale",
    country: "🇲🇽",
    level: "Diamond",
    currentLevel: "Current level: Diamond",
    badges: ["High-frequency", "Profit-generator"],
    winRate: "100%",
    riskScore: 7,
    profit: 22534.52,
    trades: 38,
    copiers: "349/907",
  },
  {
    id: 2,
    username: "Naty",
    country: "🇳🇱",
    level: "Starter",
    badges: [],
    winRate: "90.68%",
    riskScore: 8,
    profit: 9897.09,
    trades: 236,
    copiers: "33/111",
  },
  {
    id: 3,
    username: "StratosGoldwind",
    country: "🇬🇷",
    level: "Gold",
    badges: ["Profit-generator"],
    winRate: "78.36%",
    riskScore: 7,
    profit: 5124.47,
    trades: 1659,
    copiers: "67/270",
  },
  {
    id: 4,
    username: "ScalpingXAU",
    country: "🇿🇦",
    level: "Silver",
    badges: ["Veteran", "Day-trader"],
    winRate: "50.34%",
    riskScore: 7,
    profit: 3959.41,
    trades: 149,
    copiers: "66/167",
  },
  {
    id: 5,
    username: "Charly",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "82.35%",
    riskScore: 7,
    profit: 2193.1,
    trades: 255,
    copiers: "25/77",
  },
  {
    id: 6,
    username: "GridSystem",
    country: "🇺🇸",
    level: "Silver",
    badges: ["Veteran"],
    winRate: "50.93%",
    riskScore: 7,
    profit: 1638.79,
    trades: 108,
    copiers: "111/299",
  },
  {
    id: 7,
    username: "Aurora Group AI",
    country: "🇻🇳",
    level: "Gold",
    badges: [],
    winRate: "98.61%",
    riskScore: 7,
    profit: 1508.55,
    trades: 72,
    copiers: "24/62",
  },
  {
    id: 8,
    username: "NDX100",
    country: "🇺🇸",
    level: "Silver",
    badges: [],
    winRate: "83.33%",
    riskScore: 6,
    profit: 1476.01,
    trades: 30,
    copiers: "11/62",
  },
  {
    id: 9,
    username: "Tom_Martingale",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "69.71%",
    riskScore: 7,
    profit: 1387.31,
    trades: 175,
    copiers: "71/270",
  },
  {
    id: 10,
    username: "Martinezzzzzzzz",
    country: "🇪🇸",
    level: "Bronze",
    badges: [],
    winRate: "50%",
    riskScore: 5,
    profit: 1094.17,
    trades: 18,
    copiers: "104/288",
  },
  {
    id: 11,
    username: "Catedratico",
    country: "🇲🇽",
    level: "Starter",
    badges: [],
    winRate: "60.95%",
    riskScore: 7,
    profit: 881.83,
    trades: 740,
    copiers: "39/120",
  },
  {
    id: 12,
    username: "ElefantInvest",
    country: "🇩🇪",
    level: "Bronze",
    badges: [],
    winRate: "84.62%",
    riskScore: 6,
    profit: 810.92,
    trades: 78,
    copiers: "12/18",
  },
  {
    id: 13,
    username: "TradingHero",
    country: "🇪🇸",
    level: "Crystal",
    badges: ["Low-frequency"],
    winRate: "63.01%",
    riskScore: 7,
    profit: 713.31,
    trades: 173,
    copiers: "20/61",
  },
  {
    id: 14,
    username: "TomasGonzalez",
    country: "🇲🇽",
    level: "Silver",
    badges: ["Low-frequency"],
    winRate: "55.56%",
    riskScore: 3,
    profit: 684.47,
    trades: 9,
    copiers: "44/136",
  },
  {
    id: 15,
    username: "MartinHerrera",
    country: "🇦🇷",
    level: "Gold",
    badges: [],
    winRate: "75.86%",
    riskScore: 6,
    profit: 666.35,
    trades: 29,
    copiers: "70/173",
  },
  {
    id: 16,
    username: "ImpulsoPlateado",
    country: "🇲🇽",
    level: "Diamond",
    currentLevel: "Current level: Diamond",
    badges: ["Day-trader"],
    winRate: "53.57%",
    riskScore: 6,
    profit: 599.91,
    trades: 28,
    copiers: "78/220",
  },
    {
    id: 17,
    username: "SAF",
    country: "🇿🇦",
    level: "Bronze",
    badges: [],
    winRate: "40.18%",
    riskScore: 7,
    profit: 598.72,
    trades: 112,
    copiers: "9/13",
  },
  {
    id: 18,
    username: "TradersUnidos",
    country: "🇲🇽",
    level: "Silver",
    badges: ["Veteran"],
    winRate: "80.65%",
    riskScore: 6,
    profit: 528.11,
    trades: 31,
    copiers: "40/114",
  },
  {
    id: 19,
    username: "Instinto-Trading",
    country: "🇲🇽",
    level: "Crystal",
    badges: [],
    winRate: "66.87%",
    riskScore: 7,
    profit: 509.23,
    trades: 335,
    copiers: "17/60",
  },
  {
    id: 20,
    username: "Hunter",
    country: "🇲🇽",
    level: "Starter",
    badges: [],
    winRate: "85.71%",
    riskScore: 6,
    profit: 416.8,
    trades: 56,
    copiers: "18/29",
  },
  {
    id: 21,
    username: "Enaria-IA",
    country: "🇦🇷",
    level: "Gold",
    badges: [],
    winRate: "88.24%",
    riskScore: 8,
    profit: 378.72,
    trades: 51,
    copiers: "1/1",
  },
  {
    id: 22,
    username: "Wall-Street-Latino",
    country: "🇲🇽",
    level: "Gold",
    badges: ["Day-trader"],
    winRate: "56.06%",
    riskScore: 5,
    profit: 372.24,
    trades: 66,
    copiers: "12/40",
  },
  {
    id: 23,
    username: "Alfy_trading",
    country: "🇪🇸",
    level: "Bronze",
    badges: [],
    winRate: "80.82%",
    riskScore: 6,
    profit: 365.09,
    trades: 73,
    copiers: "14/18",
  },
  {
    id: 24,
    username: "GoGoGo",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "52.63%",
    riskScore: 5,
    profit: 306.43,
    trades: 38,
    copiers: "10/15",
  },
  {
    id: 25,
    username: "JBL-Trading",
    country: "🇪🇸",
    level: "Bronze",
    badges: [],
    winRate: "66.67%",
    riskScore: 6,
    profit: 287.36,
    trades: 21,
    copiers: "39/91",
  },
  {
    id: 26,
    username: "El_Camino_de_la_Tortuga",
    country: "🇲🇽",
    level: "Gold",
    badges: [],
    winRate: "62.07%",
    riskScore: 7,
    profit: 260.13,
    trades: 87,
    copiers: "13/42",
  },
  {
    id: 27,
    username: "Mi-mejor-bot-de-trading",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "56.64%",
    riskScore: 7,
    profit: 205.49,
    trades: 143,
    copiers: "43/111",
  },
  {
    id: 28,
    username: "Forex-Comunidad",
    country: "🇨🇱",
    level: "Gold",
    badges: [],
    winRate: "62.5%",
    riskScore: 7,
    profit: 199.29,
    trades: 72,
    copiers: "5/17",
  },
  {
    id: 29,
    username: "Savanna_Flow",
    country: "🇿🇦",
    level: "Gold",
    badges: [],
    winRate: "77.46%",
    riskScore: 7,
    profit: 153.05,
    trades: 71,
    copiers: "4/7",
  },
  {
    id: 30,
    username: "ThaboMokoena",
    country: "🇿🇦",
    level: "Gold",
    badges: [],
    winRate: "84.85%",
    riskScore: 6,
    profit: 123.01,
    trades: 33,
    copiers: "7/13",
  },
  {
    id: 31,
    username: "Campeon",
    country: "🇲🇽",
    level: "Silver",
    badges: ["Day-trader"],
    winRate: "62.5%",
    riskScore: 6,
    profit: 120.62,
    trades: 16,
    copiers: "24/68",
  },
  {
    id: 32,
    username: "Rich_Rush",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "37.78%",
    riskScore: 5,
    profit: 112.7,
    trades: 45,
    copiers: "9/17",
  },
    {
    id: 33,
    username: "Lautaro-Diaz",
    country: "🇦🇷",
    level: "Silver",
    badges: ["Veteran"],
    winRate: "72.73%",
    riskScore: 6,
    profit: 101.38,
    trades: 22,
    copiers: "32/78",
  },
  {
    id: 34,
    username: "VR-Zver",
    country: "🇩🇪",
    level: "Silver",
    badges: ["High-frequency"],
    winRate: "32.91%",
    riskScore: 6,
    profit: 89.79,
    trades: 79,
    copiers: "14/35",
  },
  {
    id: 35,
    username: "JuanCruzRomero",
    country: "🇦🇷",
    level: "Silver",
    badges: ["Newbie"],
    winRate: "66.67%",
    riskScore: 3,
    profit: 89.66,
    trades: 9,
    copiers: "17/49",
  },
  {
    id: 36,
    username: "AntFinances",
    country: "🇨🇱",
    level: "Silver",
    badges: [],
    winRate: "53.03%",
    riskScore: 5,
    profit: 89.09,
    trades: 66,
    copiers: "9/14",
  },
  {
    id: 37,
    username: "Ubuntu-Waves",
    country: "🇿🇦",
    level: "Silver",
    badges: [],
    winRate: "100%",
    riskScore: 3,
    profit: 73.22,
    trades: 6,
    copiers: "14/19",
  },
  {
    id: 38,
    username: "SiempreVerde",
    country: "🇲🇽",
    level: "Bronze",
    badges: ["Low-frequency", "Day-trader"],
    winRate: "55.56%",
    riskScore: 3,
    profit: 68.82,
    trades: 9,
    copiers: "37/64",
  },
  {
    id: 39,
    username: "JabulaniNkosi",
    country: "🇿🇦",
    level: "Silver",
    badges: [],
    winRate: "76.92%",
    riskScore: 6,
    profit: 68.37,
    trades: 13,
    copiers: "15/17",
  },
  {
    id: 40,
    username: "GuaraniFX",
    country: "🇵🇾",
    level: "Silver",
    badges: ["Veteran"],
    winRate: "66.67%",
    riskScore: 6,
    profit: 68.31,
    trades: 15,
    copiers: "22/50",
  },
  {
    id: 41,
    username: "Trading_EURUSD",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "87.5%",
    riskScore: 6,
    profit: 60.98,
    trades: 40,
    copiers: "24/60",
  },
  {
    id: 42,
    username: "TrendWave",
    country: "🇲🇽",
    level: "Crystal",
    badges: ["Veteran"],
    winRate: "62.5%",
    riskScore: 6,
    profit: 45.33,
    trades: 16,
    copiers: "22/119",
  },
  {
    id: 43,
    username: "Crack_del_Forex",
    country: "🇪🇸",
    level: "Bronze",
    badges: ["Low-frequency"],
    winRate: "100%",
    riskScore: 3,
    profit: 43.86,
    trades: 4,
    copiers: "49/109",
  },
  {
    id: 44,
    username: "Agustonn",
    country: "🇲🇽",
    level: "Gold",
    badges: [],
    winRate: "45.24%",
    riskScore: 5,
    profit: 43.15,
    trades: 42,
    copiers: "3/8",
  },
  {
    id: 45,
    username: "RajeshMehta",
    country: "🇮🇳",
    level: "Gold",
    badges: [],
    winRate: "100%",
    riskScore: 6,
    profit: 40.44,
    trades: 13,
    copiers: "9/11",
  },
  {
    id: 46,
    username: "Grind4Gold",
    country: "🇿🇦",
    level: "Bronze",
    badges: [],
    winRate: "96%",
    riskScore: 6,
    profit: 38.79,
    trades: 25,
    copiers: "15/32",
  },
  {
    id: 47,
    username: "LIBERTAD",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "62.5%",
    riskScore: 3,
    profit: 31.06,
    trades: 8,
    copiers: "13/41",
  },
  {
    id: 48,
    username: "El_Kraken",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "46.34%",
    riskScore: 5,
    profit: 27.28,
    trades: 41,
    copiers: "7/21",
  },
    {
    id: 49,
    username: "Alfa-Trading",
    country: "🇪🇸",
    level: "Gold",
    badges: ["Veteran"],
    winRate: "44.44%",
    riskScore: 5,
    profit: 26.89,
    trades: 18,
    copiers: "25/74",
  },
  {
    id: 50,
    username: "BotGain",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "28.57%",
    riskScore: 3,
    profit: 12.52,
    trades: 7,
    copiers: "10/14",
  },
  {
    id: 51,
    username: "Valentriana",
    country: "🇦🇷",
    level: "Starter",
    badges: [],
    winRate: "96.83%",
    riskScore: 8,
    profit: 7.15,
    trades: 63,
    copiers: "1/3",
  },
  {
    id: 52,
    username: "USDCHF-RSI",
    country: "🇺🇸",
    level: "Diamond",
    badges: ["Current level: Diamond", "High-frequency"],
    winRate: "15%",
    riskScore: 5,
    profit: 5.95,
    trades: 20,
    copiers: "19/39",
  },
  {
    id: 53,
    username: "ScalpGoldFX",
    country: "🇲🇽",
    level: "Starter",
    badges: [],
    winRate: "100%",
    riskScore: 3,
    profit: 0,
    trades: 6,
    copiers: "17/40",
  },
  {
    id: 54,
    username: "Trending_trader",
    country: "🇪🇸",
    level: "Silver",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/2",
  },
  {
    id: 55,
    username: "VortexTrade Large",
    country: "🇮🇳",
    level: "Silver",
    badges: [],
    winRate: "44.44%",
    riskScore: 5,
    profit: 0,
    trades: 18,
    copiers: "2/8",
  },
  {
    id: 56,
    username: "Ondas_de_Elliott",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/1",
  },
  {
    id: 57,
    username: "fran_24fx",
    country: "🇦🇷",
    level: "Starter",
    badges: [],
    winRate: "35%",
    riskScore: 5,
    profit: 0,
    trades: 20,
    copiers: "2/2",
  },
  {
    id: 58,
    username: "Paulapetite",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "34.78%",
    riskScore: 5,
    profit: 0,
    trades: 46,
    copiers: "0/0",
  },
  {
    id: 59,
    username: "IgnacioFernandez",
    country: "🇦🇷",
    level: "Silver",
    badges: [],
    winRate: "75%",
    riskScore: 3,
    profit: 0,
    trades: 4,
    copiers: "0/0",
  },
  {
    id: 60,
    username: "FreedomTrade",
    country: "🇦🇷",
    level: "Diamond",
    badges: ["Current level: Diamond"],
    winRate: "0%",
    riskScore: 3,
    profit: 0,
    trades: 0,
    copiers: "0/2",
  },
  {
    id: 61,
    username: "ProfesorCapitalXAU",
    country: "🇲🇽",
    level: "Gold",
    badges: [],
    winRate: "80%",
    riskScore: 7,
    profit: 0,
    trades: 85,
    copiers: "3/4",
  },
  {
    id: 62,
    username: "Jeffersont23",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 3,
    profit: 0,
    trades: 0,
    copiers: "1/6",
  },
  {
    id: 63,
    username: "nohypetrader",
    country: "🇪🇸",
    level: "Gold",
    badges: [],
    winRate: "39.78%",
    riskScore: 7,
    profit: 0,
    trades: 186,
    copiers: "0/0",
  },
  {
    id: 64,
    username: "Walterrd321",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 3,
    profit: 0,
    trades: 0,
    copiers: "4/14",
  },
    {
    id: 65,
    username: "SantanaCapital",
    country: "🇲🇽",
    level: "Gold",
    badges: ["Veteran"],
    winRate: "73.77%",
    riskScore: 6,
    profit: 0,
    trades: 61,
    copiers: "12/35",
  },
  {
    id: 66,
    username: "Goldcasvic",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/2",
  },
  {
    id: 67,
    username: "XAUStrategist",
    country: "🇺🇸",
    level: "Silver",
    badges: [],
    winRate: "66.67%",
    riskScore: 7,
    profit: 0,
    trades: 39,
    copiers: "0/0",
  },
  {
    id: 68,
    username: "EBuy",
    country: "🇲🇽",
    level: "Starter",
    badges: [],
    winRate: "0%",
    riskScore: 3,
    profit: 0,
    trades: 0,
    copiers: "26/71",
  },
  {
    id: 69,
    username: "AVUC",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/0",
  },
  {
    id: 70,
    username: "Chino",
    country: "🇦🇷",
    level: "Bronze",
    badges: [],
    winRate: "13.16%",
    riskScore: 6,
    profit: 0,
    trades: 38,
    copiers: "0/0",
  },
  {
    id: 71,
    username: "Metaltrading",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "61.9%",
    riskScore: 8,
    profit: 0,
    trades: 21,
    copiers: "0/0",
  },
  {
    id: 72,
    username: "RealGainz",
    country: "🇲🇽",
    level: "Gold",
    badges: [],
    winRate: "0%",
    riskScore: 3,
    profit: 0,
    trades: 0,
    copiers: "0/0",
  },
  {
    id: 73,
    username: "Bakhur",
    country: "🇲🇽",
    level: "Gold",
    badges: [],
    winRate: "98.08%",
    riskScore: 9,
    profit: 0,
    trades: 52,
    copiers: "0/2",
  },
  {
    id: 74,
    username: "UKRTRADER_OFFICIAL",
    country: "🇺🇦",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 3,
    profit: 0,
    trades: 0,
    copiers: "15/31",
  },
  {
    id: 75,
    username: "VictorGallo",
    country: "🇲🇽",
    level: "Gold",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/1",
  },
  {
    id: 76,
    username: "MichelFraire",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/0",
  },
  {
    id: 77,
    username: "JosephTwos",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "1/1",
  },
  {
    id: 78,
    username: "UkrTrader",
    country: "🇺🇦",
    level: "Gold",
    badges: [],
    winRate: "0%",
    riskScore: 2,
    profit: 0,
    trades: 0,
    copiers: "2/8",
  },
  {
    id: 79,
    username: "Soberoncapital",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/2",
  },
  {
    id: 80,
    username: "REVO",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "18/35",
  },
    {
    id: 81,
    username: "AZTRADER",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 3,
    profit: 0,
    trades: 0,
    copiers: "3/11",
  },
  {
    id: 82,
    username: "Jose",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/2",
  },
  {
    id: 83,
    username: "Sol_del_mercado",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "12/41",
  },
  {
    id: 84,
    username: "Nueva_ola",
    country: "🇲🇽",
    level: "Silver",
    badges: ["High-frequency"],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "17/50",
  },
  {
    id: 85,
    username: "JuanTrader",
    country: "🇲🇽",
    level: "Bronze",
    badges: ["Low-frequency"],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "25/46",
  },
  {
    id: 86,
    username: "BigBen",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "1/4",
  },
  {
    id: 87,
    username: "TheBeastTrader",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/0",
  },
  {
    id: 88,
    username: "Elementaltradingfx",
    country: "🇲🇽",
    level: "Starter",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "0/0",
  },
  {
    id: 89,
    username: "JuanC",
    country: "🇲🇽",
    level: "Gold",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "11/25",
  },
  {
    id: 90,
    username: "gzmarkets",
    country: "🇲🇽",
    level: "Starter",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "15/41",
  },
  {
    id: 91,
    username: "RoyalPrince_Scalper",
    country: "🇲🇽",
    level: "Diamond",
    badges: [],
    winRate: "64.29%",
    riskScore: 6,
    profit: 0,
    trades: 14,
    copiers: "6/19",
  },
  {
    id: 92,
    username: "ElMo",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "0%",
    riskScore: 0,
    profit: 0,
    trades: 0,
    copiers: "3/12",
  },
  {
    id: 93,
    username: "UKRTRADER_OFFICIAL mini",
    country: "🇺🇦",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 3,
    profit: 0,
    trades: 0,
    copiers: "1/2",
  },
  {
    id: 94,
    username: "Huracan-Financiero",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "50%",
    riskScore: 5,
    profit: -0.97,
    trades: 16,
    copiers: "13/61",
  },
  {
    id: 95,
    username: "Scaramanzia",
    country: "🇮🇹",
    level: "Bronze",
    badges: [],
    winRate: "44.06%",
    riskScore: 5,
    profit: -34.99,
    trades: 202,
    copiers: "7/14",
  },
  {
    id: 96,
    username: "VortexTrade Middle",
    country: "🇮🇳",
    level: "Silver",
    badges: [],
    winRate: "72%",
    riskScore: 5,
    profit: -39.25,
    trades: 25,
    copiers: "1/2",
  },
  {
    id: 97,
    username: "Henryct22",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "0%",
    riskScore: 3,
    profit: -118.52,
    trades: 1,
    copiers: "1/5",
  },
  {
    id: 98,
    username: "PesoHunter",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "50%",
    riskScore: 3,
    profit: -408.92,
    trades: 8,
    copiers: "39/123",
  },
  {
    id: 99,
    username: "nemo",
    country: "🇲🇽",
    level: "Bronze",
    badges: [],
    winRate: "65.88%",
    riskScore: 7,
    profit: -617.39,
    trades: 340,
    copiers: "48/109",
  },
  {
    id: 100,
    username: "Mistercriptonito",
    country: "🇲🇽",
    level: "Silver",
    badges: [],
    winRate: "72.34%",
    riskScore: 7,
    profit: -629.45,
    trades: 141,
    copiers: "11/11",
  },
];

  return (
    // <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full overflow-x-auto">
    //   {/* FILTER BAR */}
    //   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 border-b pb-4">
    //     <div className="flex flex-wrap items-center gap-3">
    //       <div>
    //         <label className="block text-sm font-semibold text-gray-600 mb-1">
    //           Period
    //         </label>
    //         <select
    //           value={filters.period}
    //           onChange={(e) => setFilters({ ...filters, period: e.target.value })}
    //           className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-blue-500"
    //         >
    //           <option>Last month</option>
    //           <option>This month</option>
    //           <option>Last week</option>
    //         </select>
    //       </div>

    //       <div>
    //         <label className="block text-sm font-semibold text-gray-600 mb-1">
    //           Country
    //         </label>
    //         <select
    //           value={filters.country}
    //           onChange={(e) =>
    //             setFilters({ ...filters, country: e.target.value })
    //           }
    //           className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-blue-500"
    //         >
    //           <option>All</option>
    //           <option>Mexico</option>
    //           <option>USA</option>
    //           <option>UK</option>
    //         </select>
    //       </div>

    //       <div>
    //         <label className="block text-sm font-semibold text-gray-600 mb-1">
    //           Badge
    //         </label>
    //         <select
    //           value={filters.badge}
    //           onChange={(e) => setFilters({ ...filters, badge: e.target.value })}
    //           className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-blue-500"
    //         >
    //           <option>None</option>
    //           <option>High-frequency</option>
    //           <option>Profit-generator</option>
    //           <option>Veteran</option>
    //         </select>
    //       </div>

    //       <button
    //         onClick={() =>
    //           setFilters({
    //             period: "Last month",
    //             country: "All",
    //             badge: "None",
    //             hideUnavailable: false,
    //           })
    //         }
    //         className="text-red-500 text-sm font-semibold hover:underline"
    //       >
    //         Clear filters
    //       </button>
    //     </div>

    //     <label className="flex items-center gap-2 text-sm text-gray-700">
    //       <input
    //         type="checkbox"
    //         checked={filters.hideUnavailable}
    //         onChange={(e) =>
    //           setFilters({ ...filters, hideUnavailable: e.target.checked })
    //         }
    //         className="w-4 h-4 accent-blue-500"
    //       />
    //       Hide unavailable
    //     </label>
    //   </div>

    //   {/* TABLE */}
    //   <div className="overflow-x-auto">
    //     <table className="min-w-full text-sm border-collapse">
    //       <thead>
    //         <tr className="text-gray-600 border-b">
    //           <th className="text-left py-2 px-3">Username</th>
    //           <th className="text-left py-2 px-3">Win Rate</th>
    //           <th className="text-left py-2 px-3">Risk Score</th>
    //           <th className="text-left py-2 px-3">Profit for Copiers</th>
    //           <th className="text-left py-2 px-3">Trades</th>
    //           <th className="text-left py-2 px-3">Copiers</th>
    //           <th className="text-center py-2 px-3">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((trader, index) => (
    //           <tr
    //             key={index}
    //             className="border-b hover:bg-gray-50 transition"
    //           >
    //             <td className="py-2 px-3 flex flex-col sm:flex-row sm:items-center gap-2">
    //               <span className="font-medium">{trader.country} {trader.username}</span>
    //               <div className="flex flex-wrap gap-1">
    //                 {trader.badges.map((b, i) => (
    //                   <span
    //                     key={i}
    //                     className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-md"
    //                   >
    //                     {b}
    //                   </span>
    //                 ))}
    //               </div>
    //             </td>
    //             <td className="py-2 px-3">{trader.winRate}</td>
    //             <td className="py-2 px-3">{trader.riskScore}</td>
    //             <td className="py-2 px-3 text-green-600 font-semibold">
    //               {trader.profit.toLocaleString()}
    //             </td>
    //             <td className="py-2 px-3">{trader.trades}</td>
    //             <td className="py-2 px-3">{trader.copiers}</td>
    //             <td className="py-2 px-3 text-center">
    //               <button className="bg-blue-600 text-white rounded-md px-4 py-1 hover:bg-blue-700">
    //                 Copy
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="my-10 p-4 sm:p-6 bg-white rounded-lg shadow-md w-full overflow-x-auto">
      {/* Filter bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 border-b pb-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Period */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Period</label>
            <select
              value={filters.period}
              onChange={(e) => setFilters({ ...filters, period: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-blue-500"
            >
              <option>Last month</option>
              <option>This month</option>
              <option>Last week</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Country</label>
            <select
              value={filters.country}
              onChange={(e) => setFilters({ ...filters, country: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-blue-500"
            >
              <option>All</option>
              <option>Mexico</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          {/* Badge */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Badge</label>
            <select
              value={filters.badge}
              onChange={(e) => setFilters({ ...filters, badge: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-blue-500"
            >
              <option>None</option>
              <option>High-frequency</option>
              <option>Profit-generator</option>
              <option>Veteran</option>
              <option>Day-trader</option>
            </select>
          </div>

          <button
            onClick={() =>
              setFilters({
                period: "Last month",
                country: "All",
                badge: "None",
                hideUnavailable: false,
              })
            }
            className="text-red-500 text-sm font-semibold hover:underline"
          >
            Clear filters
          </button>
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={filters.hideUnavailable}
            onChange={(e) =>
              setFilters({ ...filters, hideUnavailable: e.target.checked })
            }
            className="w-4 h-4 accent-blue-500"
          />
          Hide unavailable
        </label>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-collapse whitespace-nowrap">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="text-left py-2 px-3">#</th>
              <th className="text-left py-2 px-3">Username</th>
              <th className="text-left py-2 px-3">Win Rate</th>
              <th className="text-left py-2 px-3">Risk Score</th>
              <th className="text-left py-2 px-3">Profit for Copiers</th>
              <th className="text-left py-2 px-3">Trades</th>
              <th className="text-left py-2 px-3">Copiers</th>
              <th className="text-center py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {traders.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">{t.id}</td>
                <td className="py-2 px-3">
                  <div className="flex flex-col">
                    <span className="font-medium">{t.username} {t.country}</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {t.level && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-md">{t.level}</span>
                      )}
                      {t.currentLevel && (
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-md">{t.currentLevel}</span>
                      )}
                      {t.badges.map((b, i) => (
                        <span key={i} className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-md">{b}</span>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3">{t.winRate}</td>
                <td className="py-2 px-3">{t.riskScore}</td>
                <td className={`py-2 px-3 font-semibold ${t.profit >= 0 ? "text-green-600" : "text-red-500"}`}>
                  {t.profit.toLocaleString()}
                </td>
                <td className="py-2 px-3">{t.trades}</td>
                <td className="py-2 px-3">{t.copiers}</td>
                <td className="py-2 px-3 text-center">
                  <button className="bg-blue-600 text-white rounded-md px-4 py-1 hover:bg-blue-700">
                    Copy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Leaderboards;
