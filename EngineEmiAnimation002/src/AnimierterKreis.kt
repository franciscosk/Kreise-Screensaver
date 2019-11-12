import engineEmi.Engine
import engineEmi.Kreis
import kotlin.math.sqrt


class AnimierterKreis(radius: Double,
                      posX: Double,
                      posY: Double,
                      fillStyle:String
                      ) :Kreis(radius,posX,posY,fillStyle,context=Engine.context){

    val deltaY:Double= this.radius/20

    override fun animate() {
        super.animate()
        posY += deltaY

        val bottom = Engine.canvas.height

       // if ((posY - radius - this.height) < 0)
          //  deltaY = deltaY * -1
        if ((posY + this.height) > bottom)
            posY=0.0
    }
    }