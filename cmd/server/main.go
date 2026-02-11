
package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	// Serve static files
	fs := http.FileServer(http.Dir("./web"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// API endpoint
	http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"message": "สวัสดีจาก Go! 🚀"}`))
	})

	// Serve index.html
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./web/index.html")
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("🚀 Server running on http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}