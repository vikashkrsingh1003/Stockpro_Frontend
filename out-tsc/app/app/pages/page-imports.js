import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { DataTableUiComponent, DetailPageUiComponent, EntityFormUiComponent, HeaderCardUiComponent, PoModalUiComponent, ReportUiComponent, StatUiComponent, StockModalUiComponent, TableListUiComponent } from "../shared/ui.components";
export const pageImports = [
    CommonModule,
    FormsModule,
    RouterLink,
    StatUiComponent,
    TableListUiComponent,
    DataTableUiComponent,
    HeaderCardUiComponent,
    EntityFormUiComponent,
    DetailPageUiComponent,
    StockModalUiComponent,
    PoModalUiComponent,
    ReportUiComponent
];
export function asList(data) {
    if (Array.isArray(data))
        return data;
    if (Array.isArray(data?.content))
        return data.content;
    return [];
}
//# sourceMappingURL=page-imports.js.map