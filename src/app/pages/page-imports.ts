import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { DataTableUiComponent } from "../shared/data-table/data-table.component";
import { DetailPageUiComponent } from "../shared/detail-page/detail-page.component";
import { EntityFormUiComponent } from "../shared/entity-form/entity-form.component";
import { HeaderCardUiComponent } from "../shared/header-card/header-card.component";
import { PoModalUiComponent } from "../shared/po-modal/po-modal.component";
import { ReportUiComponent } from "../shared/report/report.component";
import { StatUiComponent } from "../shared/stat/stat.component";
import { StockModalUiComponent } from "../shared/stock-modal/stock-modal.component";
import { TableListUiComponent } from "../shared/table-list/table-list.component";

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

export function asList(data: any): any[] {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.content)) return data.content;
  return [];
}
