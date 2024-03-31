package main

import (
    "github.com/your_username/payment_gateway/cmd/auth"
    "github.com/your_username/payment_gateway/cmd/payment"
    "github.com/your_username/payment_gateway/cmd/wallet"
    "github.com/your_username/payment_gateway/cmd/user"
)

func main() {
    // Inicie todos os serviços aqui
    go auth.StartServer()
    go payment.StartServer()
    go wallet.StartServer()
    go user.StartServer()

    // Mantenha o programa em execução
    select {}
}
