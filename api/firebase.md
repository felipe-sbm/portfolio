# Código do Firebase

Olá senhores, tudo bem? 😊

Aqui vou deixar registrado o código que estou usando no firebase. Caso alguém use esse portfólio (seria um prazer está te ajudando), aqui está o código que eu usei para fazer o firebase funcionar corretamente. Faça bom proveito!

```json
{
  "rules": {
    "comments": {
      ".read": true,
      "$commentId": {
        ".write": "auth != null",
        "thumbsUp": { ".validate": "newData.isNumber()" },
        "thumbsDown": { ".validate": "newData.isNumber()" }
      }
    },
    "votes": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        "$commentId": {
          ".write": "auth != null && auth.uid === $uid"
        }
      }
    }
  }
}
```
