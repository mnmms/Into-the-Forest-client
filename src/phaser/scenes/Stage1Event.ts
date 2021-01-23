export default class Stage1Event extends Phaser.Scene {

  private popup!: any
  private title!: any
  private button!: any
  private startButton!: any

  constructor() {
    super('Stage1Event')
  }

  public init(data: any) {
    this.registry.set('score', data.score) // 이전 scene에서 올라온 데이터 등록
    this.registry.set('life', data.life)
    this.registry.set('stage', data.stage)
    this.registry.set('bird', data.bird)
    this.registry.set('squi', data.squi)
  }

  

  preload(): void {
    this.add.image(0, 0, 'cardbg').setOrigin(0, 0).setDepth(0)

    this.popup = this.add.graphics()
    this.popup.lineStyle(20, 0x501f0e)
    this.popup.fillStyle(0xffffff) // 배경색, 투명도
    this.popup.strokeRoundedRect(300, 120, 600, 400)
    this.popup.fillRoundedRect(300, 120, 600, 400)

    this.title = this.add.graphics()
    this.title.fillStyle(0x501f0e) // 배경색
    this.title.fillRoundedRect(450, 85, 300, 60, 30)

    //start button square
    this.button = this.add.graphics()
    this.button.lineStyle(1, 0x2a275c)
    this.button.fillStyle(0xf6d304, 0.5)
    this.button.strokeRoundedRect(525, 440, 150, 50, 5)
    this.button.fillRoundedRect(525, 440, 150, 50, 5)

    this.add
      .text(600, 117, "보너스 게임", {
        color: '#ffffff',
        fontSize: '40px',
        fontStyle: 'bold',
      }).setOrigin()
      
    this.add
      .text(600, 200, '주어진 시간 30초 동안', {
          color: '#000000',
          fontSize: '20px',
          fontStyle: 'bold',
          align: 'center',
          wordWrap: { width: 480, useAdvancedWrap: true },
      }).setOrigin()

    this.add
      .text(600, 250, '최대한 많은 수의 카드를 뒤집으세요!', {
          color: '#000000',
          fontSize: '20px',
          fontStyle: 'bold',
          align: 'center',
      }).setOrigin()

    this.add
      .text(600, 300, '카드를 맞추면 보너스 체력을 얻습니다', {
          color: '#000000',
          fontSize: '20px',
          fontStyle: 'bold',
          align: 'center',
      }).setOrigin()
      
    this.add
      .text(600, 380, '작동방법 : 카드를 마우스로 클릭', {
          color: '#000000',
          fontSize: '20px',
          fontStyle: 'bold',
          align: 'center',
      }).setOrigin()

    this.startButton = this.add
      .text(600, 465, 'Start', {
        color: '#2A275C',
        fontSize: '30px',
        fontStyle: 'bold',
      }).setOrigin()
    
    this.startButton.on(
      'pointerdown',
      () => {
        console.log(3)
        this.scene.start('Stage1Eventgame', { score: this.registry.values.score, life: this.registry.values.life, stage: 1, bird: this.registry.values.bird, squi: this.registry.values.squi  })
      },
      this
    )
  }
}