package engineEmi

import org.w3c.dom.CanvasRenderingContext2D

open class Rechteck(override var height : Double = 0.0,
                    override var width : Double = 0.0,
               posX : Double = 0.0,
               posY : Double = 0.0,
               fillStyle : String = "",
               strokeStyle : String = "",
               shadowColor : String = "",
               shadowBlur : String ="",
               shadowOffsetX : Double = 0.0,
               shadowOffsetY : Double= 0.0,
               context : CanvasRenderingContext2D? = null) : CanvasElement(posX = posX, posY = posY, fillStyle = fillStyle, strokeStyle = strokeStyle, shadowColor = shadowColor, shadowOffsetX = shadowOffsetX, shadowOffsetY = shadowOffsetY, context = context ){



    override fun callConcreteDrawMethod(){
        this.context?.rect(posX, this.posY, this.height, this.width)
    }
}
