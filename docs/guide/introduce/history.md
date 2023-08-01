# 历史版本

<script setup>
import { ref } from 'vue'

const versions = [
    {
        desc:"",
        version:"2.0.4"
    },
    {
        desc:"",
        version:"2.0.2"
    },
      {
        desc:"",
        version:"2.0.0"
    },
      {
        desc:"deepTest录制推荐版本",
        version:"1.1.7"
    }
]
</script>

<div v-for="i in versions">
    <h3>v{{i.version}}</h3>
    <div v-if="i.desc">
    <span>版本描述:</span> <i>{{i.desc}}</i>
    </div>
    <span>win系统:</span>
    <a :href="`http://storage.jd.local/assert/cherrySetup-${i.version}.exe`">YinTao-{{i.version}}.exe</a>
    <div>
        <span>mac系统:</span>
        <a :href="`http://storage.jd.local/assert/cherry-${i.version}.dmg`">YinTao-{{i.version}}.dmg</a>
    </div>
</div>



