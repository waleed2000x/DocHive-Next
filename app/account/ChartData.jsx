export const options = {};
export const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = "bolder 20px sans-serif";
    ctx.fillStyle = "#27e64a";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      data.datasets[0].data[0],
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
    ctx.restore();
  },
};
