import {Component} from "@angular/core";

interface Article {
    name: string;
    price: number;
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    public articles: Article[] = [
        {name: "Chips", price: 2.5},
        {name: "Coca", price: 1.5},
    ];

    public createArticle(event: MouseEvent) {
        event.preventDefault();

        const name = prompt("Nom de l'article");

        if (!name?.trim()) {
            return;
        }

        const price = prompt("Prix de l'article");

        if (!price?.trim()) {
            return;
        }

        this.articles.push({
            name: name,
            price: parseFloat(price),
        });
    }

    public saveArticles(event: MouseEvent) {
        event.preventDefault();
        localStorage.setItem("articles", JSON.stringify(this.articles));
    }
}
