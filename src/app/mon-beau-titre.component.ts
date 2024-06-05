import {Component, input} from "@angular/core";

@Component({
    template: "<h1>{{text()}}</h1>",
    selector: "mon-beau-titre",
})
export class MonBeauTitreComponent {
    public text = input.required<string>();
}
