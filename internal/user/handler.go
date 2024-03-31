package user

import (
    "context"
    "encoding/json"
    "net/http"

    "go.mongodb.org/mongo-driver/bson"

    "github.com/your_username/payment_gateway/internal/user/db"
)

// ProfileHandler handles user profile requests
func ProfileHandler(w http.ResponseWriter, r *http.Request) {
    // Conecta ao MongoDB
    err := db.ConnectDB()
    if err != nil {
        http.Error(w, "Erro ao conectar ao banco de dados", http.StatusInternalServerError)
        return
    }
    defer db.DisconnectDB() // Encerrar a conexão após o uso

    // Aqui você pode usar GetUserCollection() para obter a coleção de usuários e realizar operações CRUD

    // Exemplo de consulta simples para obter o perfil do usuário
    userCollection := db.GetUserCollection()
    filter := bson.D{{"email", "user@example.com"}} // Substitua pelo email do usuário real
    var user User
    err = userCollection.FindOne(context.Background(), filter).Decode(&user)
    if err != nil {
        http.Error(w, "Usuário não encontrado", http.StatusNotFound)
        return
    }

    // Responder com o perfil do usuário
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(user)
}
