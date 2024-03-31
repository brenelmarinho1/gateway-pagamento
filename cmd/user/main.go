package user

import (
    "net/http"

    "github.com/your_username/payment_gateway/internal/user"
)

func StartServer() {
    http.HandleFunc("/api/user", user.HandleUser)
    http.ListenAndServe(":8084", nil)
}
