```golang
package main

import (
    "fmt"
    "github.com/namdevel/namdevel"
)

type Github struct {
    username string
    contacts map[string]string
    alises   []string
    location string
    age      string
    occupation string
    operating_system string
}

func (g *Github) Init() {
    g.username = "namdevel"
    g.contacts = map[string]string{
        "Discord": "namdevel#2302",
        "Telegram": "devsprout",
    }
    g.alises = []string{"namdevel", "HEUSC"}
    g.location = "localhost, Indonesia"
    g.age = "Undefined"
    g.occupation = "Freelance Developer"
    g.operating_system = "Windows, Arch, Linux"
}
```
