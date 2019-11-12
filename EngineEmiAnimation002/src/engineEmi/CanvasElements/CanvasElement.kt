package engineEmi

import org.w3c.dom.CanvasRenderingContext2D

abstract class CanvasElement(
        var posX: Double = 0.0,
        var posY: Double = 0.0,
        var fillStyle: String = "",
        var strokeStyle: String = "",
        var shadowColor: String = "",
        var shadowBlur: String = "",
        var shadowOffsetX: Double = 0.0,
        var shadowOffsetY: Double = 0.0,
        var context: CanvasRenderingContext2D? = null) {

    abstract val width : Double
    abstract val height : Double


    constructor(posX: Double, posY: Double) : this() {
        this.posX = posX
        this.posY = posY
    }

    fun drawOnCanvasContext() {
        this.context?.beginPath()
    }

    fun prepareContext() {
        this.context?.beginPath()
    }

    fun finishDrawingOn() {
        this.context?.fillStyle = this.fillStyle
        this.context?.strokeStyle = this.strokeStyle
        this.context?.shadowColor = shadowColor
        this.context?.save()
        this.context?.stroke()
        this.context?.fill()
    }

    fun drawOnContext(){
        prepareContext()
        callConcreteDrawMethod()
        finishDrawingOn()
    }

    /**
     * Has to be overwritten inside the subclasses.
     * will call the actual draw function which differs from Subclass to subclass.
     * e.g. for Kreis
     * context?.arc(posX, this.posY, this.radius,0.0,2 * kotlin.math.PI)
     * e.g for rect
     * context?.rect(posX, this.posY, this.height, this.width)
     */
    abstract fun callConcreteDrawMethod()

    open fun animate(){
    }
}