<template>
  <div class="uploadModel">
    <div class="topName">
      {{ uploadListName }}
      <el-tooltip
        class="item"
        effect="dark"
        :content='topTip'
        placement="top"
      >
        <i class="el-icon-info"></i>
      </el-tooltip>
    </div>
    <div class="uploadMain">
      <div class="uploadBox">
        <el-upload
          class="avatar-uploader"
          :action="uploadURL"
          :show-file-list="true"
          :file-list="fileList"
          :limit="4"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <div class="avatar-uploader-icon">
            <div class="boxContent">
              <i class="el-icon-plus"></i>
              <p class="boxText">{{ uploadListBoxName }}</p>
            </div>
          </div>
        </el-upload>
      </div>
      <div class="uploadFile">
        <button class="downloadButton">下载模板</button>
        <div class="uploadLists">
          <div class="uploadItem" v-for="(item,index) in fileLsts" :key="index">
            <button
              @click="selectButton(index)"
              class="itemButton"
              :class="{'active':spanIndex.indexOf(index)>-1}">
              {{ item.name }}
              <i class="el-icon--right"
                :class="{'el-icon-error':spanIndex.indexOf(index)>-1}">
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      uploadListName: '会员注册申请表',
      topTip: 'Top Center 提示文字',
      uploadListBoxName: '上传会员注册申请表',
      uploadURL: 'https://jsonplaceholder.typicode.com/posts/',
      fileLsts: [
        { name: '会员申请表1.doc' },
        { name: '会员申请表2.doc' },
        { name: '会员申请表3.doc' }
      ],
      spanIndex: []
    }
  },
  methods: {
    selectButton (index) {
      const arrIndex = this.spanIndex.indexOf(index)
      if (arrIndex > -1) {
        this.spanIndex.splice(arrIndex, 1)
      } else {
        this.spanIndex.push(index)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.uploadModel{
  .topName{
    font-size: 16px;
    margin-bottom: 10px;
    .item{
      color: #409EFF;
    }
  }
  .uploadMain{
    width: 900px;
    height: 170px;
    background-color: rgba(63, 61, 61, 0.123);
    display: flex;
    align-items: center;
    .uploadBox{
      width: 250px;
      height: 140px;
      background-color: white;
      margin-left: 15px;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      .avatar-uploader .el-upload {
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader-icon {
        font-size: 40px;
        color: #409EFF;
        width: 250px;
        height: 140px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        .boxContent{
          .boxText {
            font-size: 16px;
          }
        }
      }
      .avatar {
        width: 250px;
        height: 140px;
        display: block;
      }
    }
    .uploadBox:hover{
      border-color: #409EFF;
    }
    .uploadFile{
      width: 500px;
      height: 140px;
      margin-left: 25px;
      .downloadButton{
        width: 85px;
        height: 30px;
        cursor: pointer;
      }
      .uploadLists{
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        .uploadItem{
          margin-right: 10px;
          margin-bottom: 10px;
          .itemButton{
            background-color: #38393a2c;
            color: #00000094;
            border: 0;
            padding: 5px 0 5px 5px;
            min-width: 130px;
            text-align: left;
            border-radius: 3px;
            outline:none;
            cursor: pointer;
          }
          .itemButton.active{
            background-color: #409EFF;
            color:white;
          }
        }
      }
    }
  }
}
</style>
