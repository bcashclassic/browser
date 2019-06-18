<template lang="html">
  <span :title=' listUnit(value)'>{{ convertToUnits(value) }}</span>
</template>

<script>
require('@/lib/iota')
const iotaNode = require("@/utils/iota-node")

export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  methods: {
    pickUnit(value) {
      var values = {
        '1': 'n',
        '1000': 'mu',
        '1000000': 'm',
        '1000000000': 'BCC',
        '1000000000000': 'k',
        '1000000000000000': 'M'
      }
      value = Math.abs(value)
      var closestAmount = Math.floor((value + "").length / 3) * 3
      var key = "1".padEnd(closestAmount + 1, "0")
      if(typeof values[key] !== undefined) {
        return values[key]
      }
      return 'M'
    },
    listUnit(value)
    {
      var unit = this.pickUnit(value)
      var values = {
        'n' : 'nano BCC',
        'mu' : "micro BCC",
        "m" : "milli BCC",
        "BCC" : "BCC",
        "k" : "kilo BCC",
        "M" : "Mega BCC"
      }
      return `${iotaNode.iota.utils.convertUnits(value, 'n', unit)}` + " " + values[unit];
    },
    convertToUnits(value) {
      var unit = this.pickUnit(value)
      return `${iotaNode.iota.utils.convertUnits(value, 'n', unit)} ${unit}`
    }
  }
}
</script>

<style lang="css">
</style>
