import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PlateFormEnum } from '../../models/plateform.enum';
import { DialogService } from 'primeng/dynamicdialog';
import { PlateformSelectorContentComponent } from '../plateform-selector-content/plateform-selector-content.component';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'pp-platform-selector',
  templateUrl: './platform-selector.component.html',
  styleUrls: ['./platform-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PlatformSelectorComponent),
    multi: true
  }]
})
export class PlatformSelectorComponent implements ControlValueAccessor {
  @Input() placeholder = 'All'
  @Input() mode: 'One' | 'Multi' = 'Multi'
  constructor(
    private primeConfig: PrimeNGConfig,

    private dialogService: DialogService,
  ) { }
  writeValue(arr: []): void {
    if (!arr || arr.length === 0) {
      arr = [];
      this.plateforms.forEach((p) => (p.selected = false))

    }
    this._selectedPlatForms = arr
    this.markPlatfromsSelected();

  }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  plateforms: PlateFromSelectItem[] = [
    {
      value: 'instagram',
      name: 'Instagram',
      selected: false,
      plateform: PlateFormEnum.Instagram,
    }, {
      value: 'twitter',
      name: 'Twitter',
      selected: false,
      plateform: PlateFormEnum.Twitter,
    }, {
      value: 'youtube',
      name: 'Youtube',
      selected: false,
      plateform: PlateFormEnum.Youtube,
    },
    {
      value: 'tiktok',
      name: 'TikTok',
      selected: false,
      plateform: PlateFormEnum.Tiktok
    }, {
      value: 'travelmassive',
      name: 'Travel Messive',
      selected: false,
      plateform: PlateFormEnum.TravelMassive,
    },
    {
      value: 'facebook',
      name: 'Facebook',
      selected: false,
      plateform: PlateFormEnum.Facebook,
    }, {
      value: 'flickr',
      name: 'Flickr',
      selected: false,
      plateform: PlateFormEnum.Flickr,
    }, {
      value: 'pinterest',
      name: 'Pinterest',
      selected: false,
      plateform: PlateFormEnum.Pinterest,
    }, {
      value: 'quora',
      name: 'Quora',
      selected: false,
      plateform: PlateFormEnum.Quora
    }
  ]

  public _selectedPlatForms : string[] = [];
  propogateChange = (_: string[]) => { };
  registerOnChange(fn: any): void {
    this.propogateChange = fn
  }
  private markPlatfromsSelected() {
    this.plateforms.forEach((p) => (p.selected = false));
    this._selectedPlatForms.forEach((pVal: any) => {
      console.log(pVal)
      this.plateforms.filter((p) => p.value === pVal).forEach((p) => p.selected = true)
    })
  }

  ngOnInit() {
    this.primeConfig.ripple = true
  }

  BasicShow: boolean = false

  show() {
    this.markPlatfromsSelected()
    const ref = this.dialogService.open(PlateformSelectorContentComponent, {
      width: '70%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true

    })
    ref.onClose.subscribe(() => {
      this.markSelection();
    },()=>{
      this.markSelection()
    })
  }

  markSelection() {
      this._selectedPlatForms = this.plateforms
      .filter((p) => p.selected)
      .map((p) => p.value);
      this.propogateChange(this._selectedPlatForms)
    }

  onItemClicked(plateform: PlateFromSelectItem) {
    plateform.selected = !plateform.selected;
    if (this.mode === 'One') {
      this.plateforms.forEach((p) => (p.selected = false));
      plateform.selected = !plateform.selected;
    }

  }

  getText(): string {
    if (this._selectedPlatForms.length === this.plateforms.length) {
      return 'All';
    } else if (this._selectedPlatForms.length === 0) {
      return this.placeholder;
    }
    return this._selectedPlatForms.join(', ');
  }

}
interface PlateFromSelectItem {
  value: string;
  name: string;
  selected: boolean;
  plateform: PlateFormEnum
}
