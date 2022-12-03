import { Component, forwardRef, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PlatformEnum } from '../../models/platform.enum';

@Component({
  selector: 'app-platform-selector',
  templateUrl: './platform-selector.component.html',
  styleUrls: ['./platform-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlatformSelectorComponent),
      multi: true,
    },
  ],
})
export class PlatformSelectorComponent implements ControlValueAccessor {
  @Input()
  placeholder = 'All';
  @Input()
  mode: 'One' | 'Multi' = 'Multi';

  constructor(private modalService: NgbModal) {}

  private _selectedPlatforms = [];

  platforms: PlatformSelectItem[] = [
    {
      value: 'instagram',
      name: 'Instagram',
      selected: false,
      platform: PlatformEnum.Instagram,
    },
    {
      value: 'twitter',
      name: 'Twitter',
      selected: false,
      platform: PlatformEnum.Twitter,
    },
    {
      value: 'youtube',
      name: 'Youtube',
      selected: false,
      platform: PlatformEnum.Youtube,
    },
    {
      value: 'tiktok',
      name: 'TikTok',
      selected: false,
      platform: PlatformEnum.Tiktok,
    },
    {
      value: 'travelmassive',
      name: 'Travel Massive',
      selected: false,
      platform: PlatformEnum.TravelMassive,
    },
    {
      value: 'facebook',
      name: 'Facebook',
      selected: false,
      platform: PlatformEnum.Facebook,
    },
    {
      value: 'flickr',
      name: 'Flickr',
      selected: false,
      platform: PlatformEnum.Flickr,
    },
    {
      value: 'pinterest',
      name: 'Pinterest',
      selected: false,
      platform: PlatformEnum.Pinterest,
    },
    {
      value: 'quora',
      name: 'Quora',
      selected: false,
      platform: PlatformEnum.Quora,
    },
  ];

  private markPlatfromsSelected() {
    /**
     * first mark all the platforms as unselected
     */
    this.platforms.forEach((p) => (p.selected = false));

    /**
     * Then set selected=true only for the platfroms in _selectedPlatforms
     */
    this._selectedPlatforms.forEach((pVal) => {
      this.platforms
        .filter((p) => p.value === pVal)
        .forEach((p) => (p.selected = true));
    });
  }

  open(content) {
    this.markPlatfromsSelected();
    this.modalService.open(content, { size: 'lg', centered: true }).result.then(
      () => {
        this.markSelection();
      },
      () => {
        this.markSelection();
      }
    );
  }

  markSelection() {
    this._selectedPlatforms = this.platforms
      .filter((p) => p.selected)
      .map((p) => p.value);
    this.propagateChange(this._selectedPlatforms);
  }
  writeValue(arr: string[]): void {
    if (!arr || arr.length === 0) {
      arr = [];
      this.platforms.forEach((p) => (p.selected = false));
    }

    this._selectedPlatforms = arr;

    this.markPlatfromsSelected();
  }

  propagateChange = (_: string[]) => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  getText(): string {
    if (this._selectedPlatforms.length === this.platforms.length) {
      return 'All';
    } else if (this._selectedPlatforms.length === 0) {
      return this.placeholder;
    }
    return this._selectedPlatforms.join(', ');
  }

  onItemClicked(platform: PlatformSelectItem) {
    platform.selected = !platform.selected;
    if (this.mode === 'One') {
      this.platforms.forEach((p) => (p.selected = false));
      platform.selected = !platform.selected;
      this.modalService.dismissAll();
    }
  }
}

interface PlatformSelectItem {
  value: string;
  name: string;
  selected: boolean;
  platform: PlatformEnum;
}
