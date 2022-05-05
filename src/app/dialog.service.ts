import { Injectable } from "@angular/core"
import { LatLng } from "leaflet"

@Injectable({
  providedIn: "root"
})
export class DialogService {

  public isShowCreateOrEditDialog: boolean = false
  public isCurrentEditLatLng: LatLng | null = null

  constructor() {
  }

  public openDialog(): void {
    this.isShowCreateOrEditDialog = true
  }

  public closeDialog(): void {
    this.isShowCreateOrEditDialog = false
  }
}
