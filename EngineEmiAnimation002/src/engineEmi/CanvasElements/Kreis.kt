package engineEmi

import org.w3c.dom.CanvasRenderingContext2D

open class Kreis(var radius : Double = 0.0,
            posX : Double = 0.0,
            posY : Double = 0.0,
            fillStyle : String = "",
            strokeStyle : String = "",
            shadowColor : String = "",
            shadowBlur : String ="",
            shadowOffsetX : Double = 0.0,
            shadowOffsetY : Double= 0.0,
            context : CanvasRenderingContext2D? = null) : CanvasElement(posX = posX, posY = posY, fillStyle = fillStyle, strokeStyle = strokeStyle, shadowColor = shadowColor, shadowOffsetX = shadowOffsetX, shadowOffsetY = shadowOffsetY, context = context ){


    override val height : Double
        get() {
            return radius
        }

    override val width : Double
        get() {
            return radius
        }
    override fun callConcreteDrawMethod(){
        context?.arc(posX, this.posY, this.radius,0.0,2 * kotlin.math.PI)
    }
}
