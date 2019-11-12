package engineEmi.CanvasElements

import engineEmi.CanvasElement
import org.w3c.dom.CanvasRenderingContext2D
import kotlin.math.abs

open class Gerade(var toX: Double = 0.0,
             var toY: Double = 0.0,
             posX: Double = 0.0,
             posY: Double = 0.0,
             fillStyle: String = "",
             strokeStyle: String = "",
             shadowColor: String = "",
             shadowBlur: String = "",
             shadowOffsetX: Double = 0.0,
             shadowOffsetY: Double = 0.0,
             context: CanvasRenderingContext2D? = null) : CanvasElement(posX = posX, posY = posY, fillStyle = fillStyle, strokeStyle = strokeStyle, shadowColor = shadowColor, shadowOffsetX = shadowOffsetX, shadowOffsetY = shadowOffsetY, context = context){

    override val height : Double
        get() {
            return abs(posY - toY)
        }

    override val width : Double
        get() {
            return abs(posX - toX)
        }

    override fun callConcreteDrawMethod() {
        context?.moveTo(posX, posY)
        context?.lineTo(toX, toY)
    }
}
