// Read an Object and build TransActions
// transactions = {
//   Date: Date
//   Ticker: text
//   Shares: integer
//   Price: float
//   }

// Build two Objects
// portfolio = {
//   ticker1 = {
//     summary = {
//       shares: integer
//       price: float
//       value: float
//     }
//     details = {
//       Date: Date
//       Shares: integer
//       price: float
//     }
//   }
// }
//
// realized = {
//   ticker1 = {
//     summary = {
//       shares: integer
//       price: float
//       value: float
//     }
//     details = {
//       Date: Date
//       Shares: integer
//       price: float
//     }
//   }
// }

// +----------+--------+-------+-------+-------+-------+
// | Ticker   | Shares | Price | Value | Price | Value |
// +----------+--------+-------+-------+-------+-------+
// | GGK      |   1000 |  4.50 |  5.20 |  4500 |  5200 |
// +----------+--------+-------+-------+-------+-------+
// | YYYYDDMM |    400 |  4.50 | +0.70 |  1800 |  +280 |
// | YYYYDDMM |    300 |  4.50 | +0.70 |  1350 |  +210 |
// | YYYYDDMM |    300 |  4.50 | +0.70 |  1350 |  +210 |
// +----------+--------+-------+-------+-------+-------+
