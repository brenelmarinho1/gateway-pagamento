package db

import (
    "context"
    "log"
    "time"

    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client

// ConnectDB establishes a connection to MongoDB
func ConnectDB() error {
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

    // Define as opções de conexão
    clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

    // Conecta ao servidor MongoDB
    var err error
    client, err = mongo.Connect(ctx, clientOptions)
    if err != nil {
        log.Fatal(err)
    }

    // Verifica a conexão
    err = client.Ping(ctx, nil)
    if err != nil {
        log.Fatal(err)
    }

    return nil
}

// GetUserCollection retorna a coleção de usuários do MongoDB
func GetUserCollection() *mongo.Collection {
    return client.Database("payment_gateway").Collection("users")
}
