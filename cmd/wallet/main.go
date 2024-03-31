package wallet

import (
    "net/http"

    "github.com/your_username/payment_gateway/internal/wallet"
)

func StartServer() {
    http.HandleFunc("/api/wallet", wallet.HandleWallet)
    http.ListenAndServe(":8083", nil)
}
