import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	template: `
		<nav>
			<ul class="flex    ">
				<li
					class="px-4 py-3 border border-red-700 bg-red-400 text-white font-light text-3xl text-center"
				>
					<a href="/">Home</a>
				</li>
			</ul>
		</nav>
		<router-outlet></router-outlet>
	`,
	styles: [
		`
			:host {
				max-width: 1280px;
				margin: 0 auto;
				padding: 2rem;
				text-align: center;
			}

			nav {
				text-align: left;
				padding: 0 0 2rem 0;
			}
		`,
	],
})
export class AppComponent {}
