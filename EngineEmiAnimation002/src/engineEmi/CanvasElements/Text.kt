package engineEmi.CanvasElements

import engineEmi.CanvasElement
import org.w3c.dom.CanvasRenderingContext2D

open class Text(var text : String = "",
           var fontStyle : String = "normal",
           var fontVariant : String = "normal",
           var fontWeight : String = "normal",
           var fontSize : Int = 30,
           var fontFamily : String = "Arial",
           var fontType : FontType = FontType.noFontType,
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
            return 100.0
        }

    override val width : Double
        get() {
            return 100.0
        }
    override fun callConcreteDrawMethod() {
        context?.font="$fontStyle ${fontSize}px $fontFamily"
        context?.fillText(text, posX,posY);
    }
}