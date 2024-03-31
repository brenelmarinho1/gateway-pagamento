package payment

import (
    "net/http"

    "github.com/your_username/payment_gateway/internal/payment"
)

func StartServer() {
    http.HandleFunc("/api/payment", payment.HandlePayment)
    http.ListenAndServe(":8081", nil)
}
