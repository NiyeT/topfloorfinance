var tff={
  wrapper:function(){
    create('div','.master-wrapper','.body');
  },
  navigation:function(){
    create('div','.navigation-wrapper','.master-wrapper')
    create('div','.login-wrapper spacer','.navigation-wrapper');
    create('div','.title-wrapper','.navigation-wrapper');
    create('div','.login-wrapper spacer','.navigation-wrapper');
  },
  signup:function(){
    create('div','.testing','.video-wrapper')
    // create('iframe','.tutorial-video','.video-wrapper');
    // $('.tutorial-video').attr('src','https://www.youtube.com/embed/S3SKXfEMSYY');
    // $('.tutorial-video').attr('frameborder',0);
    // $('.tutorial-video').attr('allowfullscreen',true);
    //
  },
  main:function(){
    create('div','.main-wrapper','.master-wrapper');
    create('div','.tutorial-wrapper','.main-wrapper');
    create('div','.signup-wrapper','.main-wrapper');
    this.signup();
  },
  draw:function(){
    this.wrapper();
    this.navigation();
    this.main();
  }
}

tff.draw();
