package main

import (
    "net/http"

    "github.com/your_username/payment_gateway/internal/auth"
)

func main() {
    // Configuração do roteador HTTP
    http.HandleFunc("/api/auth/login", auth.LoginHandler)

    // Inicia o servidor HTTP
    http.ListenAndServe(":8080", nil)
}
