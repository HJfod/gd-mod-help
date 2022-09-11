
export type PageBuilder = () => HTMLElement;

const pages: Record<string, PageBuilder> = {};

let overrideStructure = [];
let overrideStructurePos = 0;

export function registerPage(id: string, builder: PageBuilder) {
    pages[id] = builder;
}

let pageControl: HTMLElement;
export function setPageControl(page: HTMLElement) {
    pageControl = page;
}

export function navigateTo(id: string) {
    if (overrideStructurePos < overrideStructure.length) {
        id = overrideStructure[overrideStructurePos];
        overrideStructurePos += 1;
    } else {
        if (id.includes("=>")) {
            overrideStructure = id.split("=>");
            id = overrideStructure[0];
            overrideStructurePos = 1;
        }
    }
    window.history.pushState({ page: 1 }, "", `?page=${id}`);
    pageControl.innerHTML = "";
    pageControl.append(((id in pages) ? pages[id] : pages["404"])());
}
