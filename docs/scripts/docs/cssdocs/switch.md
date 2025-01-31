```css
$mdc-switch-track-width: 32px;
$mdc-switch-track-height: 14px;
$mdc-switch-thumb-diameter: 20px;
$mdc-switch-tap-target-size: 48px;

/* Amount the edge of the thumb should be offset from the edge of the track. */
$mdc-switch-thumb-offset: 4px;

/* Position for the tap target that contains the thumb to align the thumb correctly offset from the track. */
$mdc-switch-tap-target-initial-position: -$mdc-switch-tap-target-size / 2 +
  $mdc-switch-thumb-diameter / 2 - $mdc-switch-thumb-offset;

/* Value to cover the whole switch area (including the ripple) with the native control. */
$mdc-switch-native-control-width: $mdc-switch-track-width +
  ($mdc-switch-tap-target-size - $mdc-switch-thumb-diameter) + $mdc-switch-thumb-offset *
  2;

$mdc-switch-thumb-active-margin: $mdc-switch-track-width -
  $mdc-switch-thumb-diameter + $mdc-switch-thumb-offset * 2;

$mdc-switch-toggled-off-thumb-color: mdc-theme-prop-value(surface);
$mdc-switch-toggled-off-track-color: mdc-theme-prop-value(on-surface);
$mdc-switch-toggled-off-ripple-color: #9e9e9e;
$mdc-switch-disabled-thumb-color: mdc-theme-prop-value(surface);
$mdc-switch-disabled-track-color: mdc-theme-prop-value(on-surface);

$mdc-switch-baseline-theme-color: secondary;
```
